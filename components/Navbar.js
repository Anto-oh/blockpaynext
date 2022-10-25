import React, {useState, useEffect} from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";
import logo from './logosbpay/Logotipo_morado.png'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
const Navbar= ({func, address}) =>{

  return (
  <div className={styles.navbar} >
 <a><Image src={logo} height="180px" width="180px"></Image></a>
 <a>Stake</a>

 <ConnectWallet className={styles.conbut} accentColor="#cccccc" colorMode="light" />

  </div>
  );
}
export default Navbar;