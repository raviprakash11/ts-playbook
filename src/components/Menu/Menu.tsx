import React from "react";
import styles from "./Menu.module.scss";

interface MenuProps {
  menuIcon: string;
  cancelIcon: string;
  menus: string[];
  //   onClick: (id: number) => void;
}

const Menu: React.FC<MenuProps> = ({ menuIcon, cancelIcon, menus }) => {
  return (
    <div className={styles.menu}>
      <img src={menuIcon} alt="" className={styles.image} />
      <img src={cancelIcon} alt="" className={styles.image} />
      <div className={styles.menuOptions}>
        {menus.map((menu, index) => {
          return (
            <div key={index} className={styles.menuOption}>
              {menu}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
