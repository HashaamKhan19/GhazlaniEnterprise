import {
  ActionIcon,
  Button,
  Center,
  Group,
  Loader,
  Menu,
  Modal,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import Colors from "../../utils/Colors";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import { toast } from "react-hot-toast";

/*
eslint-disable
*/
const ActionIcons = ({
  id,
  name,
  email,
  image,
  attendancePercentage,
  currentLevel,
  blocked,
  role,
}) => {
  const [deleteOpened, { open: deleteOpen, close }] = useDisclosure(false);
  const [viewOpened, { open: viewOpen, close: viewClose }] =
    useDisclosure(false);
  const [loading, setLoading] = React.useState(false);
  const [loading2, setLoading2] = React.useState(false);

  async function handleDelete() {
    setLoading(true);
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(response);

      if (response?.status === 204) {
        console.log("response: ", response);
        toast.success("User deleted successfully", {
          position: "top-center",
        });
        setLoading(false);
        close();
      } else {
        toast.error(response.data.message, {
          position: "top-center",
        });
        setLoading(false);
        close();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: "top-center",
      });
      setLoading(false);
      close();
    }
  }

  async function handleUserStatus() {
    setLoading2(true);
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/users/${id}`,
        {
          blocked: !blocked,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response?.data?.status === "success") {
        console.log("response: ", response);
        toast.success("User updated successfully", {
          position: "top-center",
        });
        setLoading2(false);
      } else {
        toast.error(response.data.message, {
          position: "top-center",
        });
        setLoading2(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: "top-center",
      });
      setLoading2(false);
    }
  }

  return (
    <>
      <Group position="center" noWrap>
        <Menu shadow="md" width={100}>
          <Menu.Target>
            <Button
              variant="outline"
              compact
              radius={"xl"}
              style={
                blocked
                  ? { borderColor: Colors.red }
                  : { borderColor: Colors.secondary }
              }
              c={blocked ? Colors.red : Colors.secondary}
            >
              {blocked ? "Blocked" : "Active"}
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item onClick={handleUserStatus}>
              {loading2 ? (
                <Loader color={Colors.secondary} size={"xs"} />
              ) : (
                <Text c={Colors.black} fw={500}>
                  {blocked ? "Activate" : "Block"}
                </Text>
              )}
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>

        <Group noWrap spacing={"xs"}>
          <ActionIcon onClick={deleteOpen}>
            <FiTrash2 color={Colors.red} size={20} />
          </ActionIcon>

          <ActionIcon onClick={viewOpen}>
            <AiOutlineEye color={Colors.blue} size={22} />
          </ActionIcon>
        </Group>
      </Group>

      {/* Deleting a user modal */}
      <Modal
        opened={deleteOpened}
        onClose={close}
        title="Deletion Confirmation"
        centered
        overlayProps={{
          color: Colors.black,
          opacity: 0.55,
          blur: 3,
        }}
        styles={{
          title: {
            color: Colors.black,
            fontWeight: 700,
            fontSize: "1.1rem",
            width: "100%",
            textAlign: "center",
            textTransform: "uppercase",
          },
        }}
        padding={"xl"}
        radius={"md"}
      >
        {loading ? (
          <Center>
            <Loader color={Colors.secondary} size={"xl"} />
          </Center>
        ) : (
          <>
            <Text c={Colors.black} fw={500}>
              Are you sure you want to delete this user? This action is
              permanent and cannot be undone.
            </Text>
            <Group mt={"md"} position="right">
              <Button onClick={close} color="dark">
                Cancel
              </Button>
              <Button color="red" onClick={handleDelete}>
                Delete
              </Button>
            </Group>
          </>
        )}
      </Modal>

      {/* View Details Modal */}
      <Modal
        opened={viewOpened}
        onClose={viewClose}
        title="View User Details"
        centered
        overlayProps={{
          color: Colors.black,
          opacity: 0.55,
          blur: 3,
        }}
        styles={{
          title: {
            color: Colors.black,
            fontWeight: 700,
            fontSize: "1.1rem",
            width: "100%",
            textAlign: "center",
            textTransform: "uppercase",
          },
        }}
        padding={"xl"}
        radius={"md"}
      >
        <Stack align="center">
          <Text c={Colors.black} fw={600} size={"lg"}>
            Name:{" "}
            <span style={{ fontWeight: 400, marginLeft: "1rem" }}>{name}</span>
          </Text>
          <Text c={Colors.black} fw={600} size={"lg"}>
            Email:{" "}
            <span style={{ fontWeight: 400, marginLeft: "1rem" }}>{email}</span>
          </Text>
          <Text c={Colors.black} fw={600} size={"lg"}>
            Attendance:{" "}
            <span style={{ fontWeight: 400, marginLeft: "1rem" }}>
              {attendancePercentage + "%"}
            </span>
          </Text>
          <Text c={Colors.black} fw={600} size={"lg"}>
            Account Level:{" "}
            <span style={{ fontWeight: 400, marginLeft: "1rem" }}>
              {currentLevel}
            </span>
          </Text>
          <Text c={Colors.black} fw={600} size={"lg"}>
            Account Status:{" "}
            <span style={{ fontWeight: 400, marginLeft: "1rem" }}>
              {blocked ? "Blocked" : "Active"}
            </span>
          </Text>
          <Text c={Colors.black} fw={600} size={"lg"}>
            Role:{" "}
            <span style={{ fontWeight: 400, marginLeft: "1rem" }}>{role}</span>
          </Text>
        </Stack>
      </Modal>
    </>
  );
};

export default ActionIcons;
