import React, { ReactNode } from "react";
import styles from "./Dashboard.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/Menu/Menu";
import menuIcon from "../../assets/Images/icons/menu.png";
import cancelIcon from "../../assets/Images/icons/cancel.png";
import groupIcon from "../../assets/Images/icons/groupme.png";
import banner from "../../assets/Images/banner3.jpeg";

interface DashboardProps {
  // banner: ReactNode;
  content: String;
  // mypic: ReactNode;
  // link: ReactNode;
  // footer: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({
  // banner,
  content,
  // mypic,
  // link,
  // footer,
}) => {
  return (
    <div className={styles.dashboard}>
      <div
        style={{
          position: "sticky",
          top: "0",
          backgroundColor: "aqua",
          zIndex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Navbar
          menu={
            <Menu
              menuIcon={menuIcon}
              cancelIcon={cancelIcon}
              menus={["Home", "MyBlog"]}
            />
          }
          heading={"RAVI PRAKASH"}
          groupIcon={groupIcon}
        />
      </div>
      <img src={banner} alt="" style={{ height: "100%", width: "70%" }} />
      <div style={{ width: "20%" }}>{content}</div>
      {/* <div>{mypic}</div>
      <div>{link}</div>
      <div>{footer}</div> */}
    </div>
  );
};

export default Dashboard;
