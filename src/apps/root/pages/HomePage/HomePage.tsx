import React, { FC} from 'react';
import { Button } from 'antd';
import Logo from '../../../../assets/icons/Logo.svg';
import 'antd/dist/antd.css';
import './HomePage.scss';

const HomePage: FC = () => {
  return (
    <div styleName="container-fluid">
      <img src={Logo} alt="Nova" width="200"/>
      <Button type="link">Login</Button>
      <Button type="primary">Get Started</Button>
    </div>
  );
};

export default HomePage;
