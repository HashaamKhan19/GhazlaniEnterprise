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
import { BiBell, BiBellPlus } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import Notification from "../Generic/Notification";

function AppLayout() {
  const [activeLink, setActiveLink] = useState(1);
  const [opened, { toggle }] = useDisclosure(false);
  const [notifications, setNotifications] = useState([]);

  const match768 = useMediaQuery("(max-width: 768px)");

  const { user, token } = useContext(AuthContext);
  const interval = useInterval(() => {
    fetch("http://localhost:3000/api/questions/dailyQuestion", {
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
            throw new Error(err.message || "Request failed with status " + err.status);
          });
        }
      })
      .then((data) => {
        setNotifications((pervStatus) => [
          ...pervStatus,
          {
            status: true,
            createdAt: data?.data?.question?.createdAt,
          },
        ]);
        // setIsLoading(false);
        console.log(data?.data?.question);
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-center",
          icon: "💀",
        });
      });
  }, 1000 * 60 * 10);

  useEffect(() => {
    if (localStorage.getItem("userType") !== "user") {
      localStorage.clear();
      window.location.href = "/login";
    }
    interval.start();
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
