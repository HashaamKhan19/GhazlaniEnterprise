/* eslint-disable */
import React, { useContext, useEffect } from "react";
import { Avatar, Divider, Menu, Stack, Text } from "@mantine/core";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOutCircle } from "react-icons/bi";
import Colors from "../../utils/Colors";
import { useMediaQuery } from "@mantine/hooks";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineLock } from "react-icons/ai";
import { toast } from "react-hot-toast";

const UserProfile = () => {
  const match768 = useMediaQuery("(max-width: 768px)");

  const { logout, token, user } = useContext(AuthContext);

  const [userData, setUserData] = React.useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response?.data?.data?.user);
      } catch (error) {
        toast.error(error.message, {
          position: "top-center",
        });
      }
    };
    fetchUserData();
  }, []);

  return (
    <div
      style={{
        // marginRight: match768 ? "4px" : "20px",
        cursor: "pointer",
      }}
    >
      <Menu width={"auto"} position="bottom-end" withArrow>
        <Menu.Target>
          <Avatar radius="xl" src={user?.image} />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item c={Colors.main}>
            <Stack spacing={"xs"}>
              <Text c={Colors.secondary} fw={600}>
                {localStorage.getItem("username") || user?.name || "user"}
              </Text>
              <Text c={Colors.secondary} fw={600}>
                {localStorage.getItem("email") || userData?.email || "user"}
              </Text>
            </Stack>
          </Menu.Item>

          <Divider margins={0} />

          <Menu.Item
            icon={<IoSettingsOutline size={16} />}
            c={Colors.main}
            onClick={() => {
              navigate("/userDetails", {
                state: {
                  userData: userData,
                },
              });
            }}
          >
            Settings
          </Menu.Item>

          <Menu.Item
            icon={<AiOutlineLock size={16} />}
            c={Colors.main}
            onClick={() => {
              navigate("/changePassword", {
                state: {
                  userData: userData,
                },
              });
            }}
          >
            Update Password
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
