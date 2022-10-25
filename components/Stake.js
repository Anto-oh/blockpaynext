import React, { Component, useState } from 'react'
import { IconWallet} from '@tabler/icons';
import 'remixicon/fonts/remixicon.css'
import styles from '../styles/Stake.module.css'
import isotipo from './logosbpay/Isotipo_blanco.png'
import Image from 'next/image'
function Stake(){
const [open, setOpen] = useState(false);
const handleOpen = () => {
    setOpen(!open);
  };


  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };
return(
    
<div className={styles.Stake}>
    <div style={{display:"grid", gridTemplateRows: "auto auto"}}>
        
        <div className={styles.stakebox}>
            <div style={{display: 'flex',flexDirection: 'row'}}>
                <p>Choose quantity</p>
                <input className={styles.input} placeholder='0.00' id='stakeinput'></input>
            </div>
            <button className={styles.button2}>MINT</button>
        </div>
    
    
        <div className={styles.unstakebox}>
            <p style={{alignText:'left'}}>0 AVAX</p>
            <div style={{display:"grid", gridTemplateColumns: "auto auto", position:"relative"}}>
                <input className={styles.input2} placeholder='0.00' id='stakeinput'></input>
                <div style={{ position:"absolute", top:"5px", left:"20px"}}>
                    <p> Quantity</p>
                </div>
            </div>
            <div className={styles.dropdown}>
                <button className={styles.button4} onClick={handleOpen}>Type of currency</button> 
                {open ? (
        <ul className={styles.menu}>
          <li className={styles.menuitem}>
            <button  onClick={handleMenuOne}>AVAX</button>
          </li>
          <li className={styles.menuitem}>
            <button onClick={handleMenuTwo}>Dollar</button>
          </li>
        </ul>
      ) : null}
      {open ? <div>Is Open</div> : <div>Is Closed</div>}
</div>
                <button className={styles.button3}>BUY</button>
        </div>
    </div>
</div>

)
}


export default Stake