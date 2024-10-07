import React, { ReactNode } from "react";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  menu: ReactNode;
  heading: string;
  groupIcon: string;
}

const Navbar: React.FC<NavbarProps> = ({ menu, heading, groupIcon }) => {
  return (
    <div className={styles.navbar}>
      {menu}
      <div>{heading}</div>
      <img src={groupIcon} alt="" />
    </div>
  );
};

export default Navbar;
