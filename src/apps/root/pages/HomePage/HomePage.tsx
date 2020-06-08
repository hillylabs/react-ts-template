import React, { FC } from "react";
import { Button } from "antd";
import { Logo, Background } from "../../../../assets";
import "../../../../styles/ant-theme-vars.less";
import styles from "./HomePage.scss";

const HomePage: FC = () => {
  const bg = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '99.99vw',
    height: '99.99vh'
  };
  return (
      <div className={styles.containerFluid} style={bg}>
        <img src={Logo} alt="Nova" width="200"/>
        <Button type="link">Login</Button>
        <Button type="primary">Get Started</Button>
      </div>

  );
};

export default HomePage;
