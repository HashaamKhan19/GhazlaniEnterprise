import {
  AppShell,
  Burger,
  Drawer,
  Header,
  Navbar,
  Stack,
  Text,
} from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Colors from "../../../utils/Colors";
import Sidebar from "./Sidebar";
import UserProfile from "../../Generic/UserProfile";
import AllUsers from "../Users/AllUsers";
import Questions from "../Questions/Questions";
import { AuthContext } from "../../../context/authContext";

function AdminLayout() {
  const [activeLink, setActiveLink] = useState(1);
  const [opened, { toggle }] = useDisclosure(false);

  const match768 = useMediaQuery("(max-width: 768px)");

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.role !== "admin") {
      window.location.href = "/";
    }
  }, [user]);

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
          <Header
            height={60}
            p="xs"
            bg={Colors.primary}
            style={{ borderWidth: 0 }}
          >
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
                <Burger
                  color={Colors.white}
                  opened={opened}
                  onClick={toggle}
                  hidden={!match768}
                />
                <Text
                  color={Colors.red}
                  style={{
                    fontSize: 24,
                    fontWeight: 600,
                  }}
                >
                  Ghazlani Enterprise - Admin Portal
                </Text>
              </div>

              <UserProfile />
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
          <AllUsers />
        ) : activeLink === 2 ? (
          <Questions />
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
          <Sidebar
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            toggle={toggle}
          />
        </Stack>
      </Drawer>
    </>
  );
}

export default AdminLayout;
