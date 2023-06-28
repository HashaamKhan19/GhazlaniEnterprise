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
  const [active, setActive] = React.useState(false);
  const [deleteOpened, { open: deleteOpen, close: deleteClose }] =
    useDisclosure(false);
  const [viewOpened, { open: viewOpen, close: viewClose }] =
    useDisclosure(false);
  const [loading, setLoading] = React.useState(false);

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

      if (response?.data?.status === "success") {
        console.log("response: ", response);
        toast.success("User deleted successfully", {
          position: "top-center",
        });
        setLoading(false);
      } else {
        toast.error(response.data.message, {
          position: "top-center",
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: "top-center",
      });
      setLoading(false);
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
                active
                  ? { borderColor: Colors.secondary }
                  : { borderColor: Colors.red }
              }
              c={active ? Colors.secondary : Colors.red}
            >
              {active ? "Active" : "Blocked"}
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item onClick={() => setActive(!active)}>
              {active ? "Block" : "Activate"}
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
        onClose={deleteClose}
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
