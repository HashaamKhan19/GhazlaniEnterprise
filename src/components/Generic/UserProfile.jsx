/* eslint-disable */
import React from "react";
import { Avatar, Menu } from "@mantine/core";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOutCircle } from "react-icons/bi";
import Colors from "../../utils/Colors";
import { useMediaQuery } from "@mantine/hooks";

const UserProfile = () => {
  const match768 = useMediaQuery("(max-width: 768px)");

  return (
    <div
      style={{
        marginRight: match768 ? "4px" : "20px",
        cursor: "pointer",
      }}
    >
      <Menu width={120}>
        <Menu.Target>
          <Avatar radius="xl" src={"https://picsum.photos/200/300"} />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item icon={<IoSettingsOutline size={16} />} c={Colors.main}>
            Settings
          </Menu.Item>
          <Menu.Item icon={<BiLogOutCircle size={16} />} c={Colors.red}>
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default UserProfile;
