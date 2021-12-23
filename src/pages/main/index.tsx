import React, { FunctionComponent } from "react";
import { Card, Input } from "../../components";
import profile from "../../assets/svg/profile.svg";
import logout from "../../assets/svg//log-out.svg";
import styles from "./styles.module.scss";

export const Main: FunctionComponent = () => {
  return (
    <>
      <div className={styles["header-row"]}>
        <Card>
          <Input placeholder="sadsad" />
        </Card>
        <Card>
          <div className={styles["profile-row"]}>
            <div className={styles["profile-info"]}>
              <img
                src={profile}
                alt="profile"
                className={styles["profile-img_user"]}
              />
              <div>
                <p> Корсун Николай</p>
                <p> большая бульварная 11</p>
              </div>
            </div>
            <img
                src={logout}
                alt="profile"
                className={styles["profile-img"]}
              />
          </div>
        </Card>
      </div>
    </>
  );
};
