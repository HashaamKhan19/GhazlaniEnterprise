import { Paper, Title, Button, Stack, PasswordInput } from "@mantine/core";
import Colors from "../../utils/Colors";

export default function ChangePassword() {
  return (
    <div
      style={{
        backgroundColor: Colors.main,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack>
        <Title align="center" c={Colors.red}>
          Ghazlani Enterprise
        </Title>

        <Paper
          p={"xl"}
          mt={"xl"}
          radius="lg"
          bg={Colors.primary}
          style={{
            width: "420px",
            height: "auto",
          }}
        >
          <Title align="center" c={Colors.white} py={"md"}>
            Change Password
          </Title>
          <form>
            <Stack spacing={"xl"}>
              <PasswordInput
                label="Enter Old Password"
                size="md"
                styles={{
                  label: {
                    color: Colors.white,
                    fontSize: "1.2rem",
                  },
                }}
              />
              <PasswordInput
                label="Enter New Password"
                size="md"
                styles={{
                  label: {
                    color: Colors.white,
                    fontSize: "1.2rem",
                  },
                }}
              />
            </Stack>

            <Button
              fullWidth
              mt="xl"
              style={{
                backgroundColor: Colors.secondary,
                color: Colors.white,
              }}
              type="submit"
            >
              Update Password
            </Button>
          </form>
        </Paper>
      </Stack>
    </div>
  );
}
