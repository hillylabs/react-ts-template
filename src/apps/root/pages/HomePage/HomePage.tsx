import React, { FC } from "react";
import { Button } from "antd";
import { Logo, Background } from "../../../../assets";

import "antd/dist/antd.css";
import styles from "./HomePage.scss";

const HomePage: FC = () => {
  return (
    <>
      <div className={styles.bgContainer}>
        <img src={Background} alt="bg" className={styles.bg} />
      </div>
      <div className={styles.containerFluid}>
        <img src={Logo} alt="Nova" width="200" />
        <Button type="link">Login</Button>
        <Button type="primary">Get Started</Button>
      </div>
    </>
  );
};

export default HomePage;
