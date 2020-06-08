import React, { FC } from "react";
import { Row, Col, Space} from "antd";
import { Logo, Background } from "../../../../assets";
// import "../../../../styles/ant-theme-vars.less";
import './HomePage.less';
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
    <div style={bg}>
      <Row>
        <Col span={18} md={18} lg={18}>
          <img src={Logo} alt="Nova" width="200" className={styles.logo}/>
        </Col>
        <Col span={3} md={3} lg={3}>
          <div className={styles.navbarLinks}>
            <a href="" className={styles.defaultLink}>Login</a>
          </div>
        </Col>
        <Col span={3} md={3} lg={3}>
          <div className={styles.navbarLinks}>
            <a href="" className={styles.primaryLink}>Get Started</a>
          </div>
        </Col>
        <Col span={24} sm={24} md={24} lg={24}>
            <div className={styles.content}>
              <h1 className={styles.landingHeader}>Online Invoicing Software</h1>
              <p className={styles.landingContent}>Record, manage and track your business activities digitally online</p>
            </div>
        </Col>
      </Row>
    </div>

  );
};

export default HomePage;
