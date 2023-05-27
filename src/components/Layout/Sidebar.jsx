import React, { useState } from "react";
import links from "./SidebarLinks";
import Colors from "../../utils/Colors";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  return (
    <div>
      <ul style={styles.sidebarList}>
        {links.map((link) => (
          <li
            key={link.id}
            style={{
              ...styles.sidebarItem,
              background:
                activeLink === link.id ? Colors.secondary : Colors.primary,
            }}
            onClick={() => handleLinkClick(link.id)}
          >
            {<link.icon style={styles.icon} />}
            <span style={styles.linkText}>{link.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  sidebarList: {
    listStyle: "none",
    padding: 20,
  },
  sidebarItem: {
    display: "flex",
    alignItems: "center",
    margin: "24px 0",
    borderRadius: "10px",
    cursor: "pointer",
    padding: "10px 20px",
  },
  icon: {
    marginRight: "14px",
    color: Colors.white,
    fontSize: "24px",
  },
  linkText: {
    fontSize: "22px",
    color: Colors.white,
    fontWeight: 500,
  },
};

export default Sidebar;
