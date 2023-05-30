import {
  AppShell,
  Burger,
  Drawer,
  Header,
  Navbar,
  Stack,
  Text,
} from "@mantine/core";
import Colors from "../../utils/Colors";
import UserProfile from "../Generic/UserProfile";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Dashboard from "../Customer/Dashboard/Dashboard";
import Questions from "../Customer/Questions/Questions";
import TimeTable from "../Customer/TimeTable/TimeTable";
import Tracking from "../Customer/Tracking/Tracking";
import Notifications from "../Customer/Notifications/Notifications";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

function AppLayout() {
  const [activeLink, setActiveLink] = useState(1);
  const [opened, { toggle }] = useDisclosure(false);

  const match768 = useMediaQuery("(max-width: 768px)");

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
                  Ghazlani Enterprise
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
          <Dashboard />
        ) : activeLink === 2 ? (
          <Questions />
        ) : activeLink === 3 ? (
          <Tracking />
        ) : activeLink === 4 ? (
          <TimeTable />
        ) : activeLink === 5 ? (
          <Notifications />
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

export default AppLayout;
