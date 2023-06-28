/* eslint-disable react/prop-types */
import { Menu } from "@mantine/core";
import React from "react";
import { FaBell } from "react-icons/fa";

const Notification = ({ notifications }) => {
  const length = notifications.length || 0;

  function getFormattedDateTime(dateStr) {
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return `${formattedDate} ${formattedTime}`;
  }
  return (
    <div>
      <Menu width={"350px"} position="bottom-end" withArrow>
        <Menu.Target>
          <div>
            {notifications[length - 1]?.status === true && (
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  color: "white",
                  textAlign: "center",
                  top: 8,
                  right: 95,
                }}
              >
                {length}
              </div>
            )}

            <FaBell syle={{ position: "relative" }} color="white" size={28} />
          </div>
        </Menu.Target>

        <Menu.Dropdown style={{ maxHeight: "20rem", overflowY: "scroll" }}>
          {notifications.length === 0 && (
            <Menu.Item>There are no notifications</Menu.Item>
          )}
          {notifications.map((notif, idx) => (
            <Menu.Item key={idx}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "15px" }}>
                  Question has been created
                </span>
                <span style={{ fontSize: "12px", fontStyle: "italic" }}>
                  {getFormattedDateTime(notif?.createdAt)}
                </span>
              </div>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default Notification;
