import { AppShell, Header, Navbar, Text } from "@mantine/core";
import Colors from "../../utils/Colors";
import UserProfile from "../Generic/UserProfile";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Dashboard from "../Customer/Dashboard/Dashboard";
import Questions from "../Customer/Questions/Questions";
import TimeTable from "../Customer/TimeTable/TimeTable";
import Notifications from "../Customer/Notifications/Notifications";

function AppLayout() {
  const [activeLink, setActiveLink] = useState(1);

  return (
    <>
      <AppShell
        padding="md"
        navbar={
          <Navbar
            width={{ base: 300 }}
            style={{
              borderTopRightRadius: 20,
              borderWidth: 0,
            }}
            my={"lg"}
            height={"100vh"}
            p="xs"
            bg={Colors.primary}
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
                padding: "0 20px",
              }}
            >
              <Text
                color={Colors.red}
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                }}
              >
                Ghazlani Enterprise
              </Text>
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
          <TimeTable />
        ) : activeLink === 4 ? (
          <Notifications />
        ) : null}
      </AppShell>
    </>
  );
}

export default AppLayout;
