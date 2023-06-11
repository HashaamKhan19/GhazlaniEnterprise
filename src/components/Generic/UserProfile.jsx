/* eslint-disable */
import React, { useContext } from "react";
import { Avatar, Divider, Menu, Stack, Text } from "@mantine/core";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOutCircle } from "react-icons/bi";
import Colors from "../../utils/Colors";
import { useMediaQuery } from "@mantine/hooks";
import { AuthContext } from "../../context/authContext";

const UserProfile = () => {
  const match768 = useMediaQuery("(max-width: 768px)");

  const { logout, user } = useContext(AuthContext);

  return (
    <div
      style={{
        // marginRight: match768 ? "4px" : "20px",
        cursor: "pointer",
      }}
    >
      <Menu width={"auto"} position="bottom-end" withArrow>
        <Menu.Target>
          <Avatar radius="xl" src={"https://picsum.photos/200/300"} />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item c={Colors.main}>
            <Stack spacing={"xs"}>
              <Text>{user?.name || "user"}</Text>
              <Text>{user?.email || "user"}</Text>
            </Stack>
          </Menu.Item>

          <Divider margins={0} />

          <Menu.Item icon={<IoSettingsOutline size={16} />} c={Colors.main}>
            Settings
          </Menu.Item>
          <Menu.Item
            icon={<BiLogOutCircle size={16} />}
            c={Colors.red}
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default UserProfile;
