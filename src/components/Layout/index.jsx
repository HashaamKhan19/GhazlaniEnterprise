import { AppShell, Header, Navbar } from "@mantine/core";
import Colors from "../../utils/Colors";

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
            {/* Navbar content */}
          </Navbar>
        }
        header={
          <Header
            height={60}
            p="xs"
            bg={Colors.primary}
            style={{ borderWidth: 0 }}
          >
            {/* Header content */}
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
