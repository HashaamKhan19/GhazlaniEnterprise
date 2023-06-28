import { AppShell, Burger, Drawer, Group, Header, Navbar, Stack, Text } from "@mantine/core";
import Colors from "../../utils/Colors";
import UserProfile from "../Generic/UserProfile";
import Sidebar from "./Sidebar";
import { useContext, useEffect, useState } from "react";
import Dashboard from "../Customer/Dashboard/Dashboard";
import Questions from "../Customer/Questions/Questions";
import TimeTable from "../Customer/TimeTable/TimeTable";
import Tracking from "../Customer/Tracking/Tracking";
import { useDisclosure, useInterval, useMediaQuery } from "@mantine/hooks";
import { AuthContext } from "../../context/authContext";
import { toast } from "react-hot-toast";
import Notification from "../Generic/Notification";
import { useNavigate } from "react-router-dom";

function AppLayout() {
  const [activeLink, setActiveLink] = useState(1);
  const [opened, { toggle }] = useDisclosure(false);
  const [notifications, setNotifications] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const match768 = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const notifcations = JSON.parse(localStorage.getItem("notifications"));
  const { user, token } = useContext(AuthContext);

  const interval = useInterval(() => {
    console.log(interval);
    if (!isFetching) return;
    fetch(`http://localhost:3000/api/questions/dailyQuestion/${user.currentLevel}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((err) => {
            // throw an error so that it can be caught in catch block to display toast message
            throw new Error(err.message || "Request failed with status " + err.status);
          });
        }
      })
      .then((data) => {
        const createdAt = data?.data?.question?.createdAt;
        setNotifications((prevStatus) => {
          // if a notification with the same createdAt already exists, don't add it to the array
          if (prevStatus[prevStatus.length - 1]?.createdAt === createdAt) {
            // stop fetching and return the already existing notifcations array.
            setIsFetching(false);
            return prevStatus;
          } else {
            setIsFetching(false);
            // append the new notification to the notifications array and save in localStorage
            localStorage.setItem(
              "notifcations",
              JSON.stringify([
                ...prevStatus,
                {
                  status: true,
                  createdAt: createdAt,
                },
              ])
            );
            return [
              ...prevStatus,
              {
                status: true,
                createdAt: createdAt,
              },
            ];
          }
        });
        // setIsLoading(false);
        console.log(data?.data?.question);
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-center",
          icon: "💀",
        });
      });
  }, 1000);

  useEffect(() => {
    if (localStorage.getItem("userType") !== "user") {
      localStorage.clear();
      navigate("/login");
    }
    if (notifcations?.length > 0) {
      setNotifications(notifcations);
    }
    if (!isFetching) {
      interval.stop();
    } else {
      interval.start();
    }
    return () => {
      interval.stop;
    };
  }, [user, interval]);

  return (
    <>
      <AppShell
        padding="md"
        navbar={
          <Navbar
            width={{ base: match768 ? 0 : 300 }}
            style={{
              borderTopRightRadius: 20,
              borderWidth: 0,
            }}
            my={"lg"}
            height={"100vh"}
            bg={Colors.primary}
            hidden={match768}
          >
            <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} />
          </Navbar>
        }
        header={
          <Header height={60} p="xs" bg={Colors.primary} style={{ borderWidth: 0 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: match768 ? "0 10px" : "0 20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Burger color={Colors.white} opened={opened} onClick={toggle} hidden={!match768} />
                <Text
                  color={Colors.red}
                  style={{
                    fontSize: 24,
                    fontWeight: 600,
                  }}
                >
                  Ghazlani Enterprise
                </Text>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <Notification notifications={notifications} />
                <UserProfile />
              </div>
            </div>
          </Header>
        }
        styles={() => ({
          main: {
            backgroundColor: Colors.main,
          },
        })}
      >
        {activeLink === 1 ? (
          <Dashboard />
        ) : activeLink === 2 ? (
          <Questions />
        ) : activeLink === 3 ? (
          <Tracking />
        ) : activeLink === 4 ? (
          <TimeTable />
        ) : null}
      </AppShell>

      <Drawer
        opened={opened}
        onClick={toggle}
        overlayProps={{ opacity: 0.5, blur: 4 }}
        size={300}
        transitionProps={{
          transition: "scale-x",
          duration: 250,
          timingFunction: "linear",
        }}
      >
        <Stack>
          <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} toggle={toggle} />
        </Stack>
      </Drawer>
    </>
  );
}

export default AppLayout;
