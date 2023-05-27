import { AppShell, Header, Navbar, Text } from "@mantine/core";
import Colors from "../../utils/Colors";
import UserProfile from "../Generic/UserProfile";
import Sidebar from "./Sidebar";

function AppLayout() {
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
            <Sidebar />
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
        <h1>Hi</h1>
      </AppShell>
    </>
  );
}

export default AppLayout;
