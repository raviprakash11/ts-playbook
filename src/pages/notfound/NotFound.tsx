import React from "react";
import styles from "./NotFound.module.scss";

interface NotFoundProps {
  message: string;
  imageUri: string;
  notFound: string;
}

const NotFound: React.FC<NotFoundProps> = ({ message, imageUri, notFound }) => {
  return (
    <div className={styles.notFound}>
      <img src={imageUri} alt={notFound} className={styles.notFound} />
      <div>{message}</div>
    </div>
  );
};

export default NotFound;
