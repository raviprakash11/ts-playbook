import React, { ReactNode } from "react";
import styles from "./Layout.module.scss";

interface LayoutProps {
  page: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ page }) => {
  return (
    <div className={styles.layout}>
      <div>{page}</div>
    </div>
  );
};

export default Layout;
