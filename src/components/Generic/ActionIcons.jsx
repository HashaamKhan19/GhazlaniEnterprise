import {
  ActionIcon,
  Button,
  Center,
  Group,
  Menu,
  Modal,
  Text,
} from "@mantine/core";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import Colors from "../../utils/Colors";
import { useDisclosure } from "@mantine/hooks";

const ActionIcons = () => {
  const [active, setActive] = React.useState(false);
  const [opened, { open, close }] = useDisclosure(false);

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

        <ActionIcon onClick={open}>
          <FiTrash2 color={Colors.red} />
        </ActionIcon>
      </Group>
      <Modal
        opened={opened}
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
        <Text c={Colors.black} fw={500}>
          Are you sure you want to delete this user? This action is permanent
          and cannot be undone.
        </Text>
        <Group mt={"md"} position="right">
          <Button onClick={close} color="dark">
            Cancel
          </Button>
          <Button color="red" onClick={close}>
            Delete
          </Button>
        </Group>
      </Modal>
    </>
  );
};

export default ActionIcons;
