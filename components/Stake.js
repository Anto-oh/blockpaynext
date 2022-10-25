import React, { Component, useState } from 'react'
import { IconWallet} from '@tabler/icons';
import 'remixicon/fonts/remixicon.css'
import styles from '../styles/Stake.module.css'
import isotipo from './logosbpay/Isotipo_blanco.png'
import Image from 'next/image'


class Stake extends Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            currency: 'AVAX'
        }
    }

    
handleOpen = () => {
    const previous_state = this.state.open
    this.setState({open: !previous_state});
  };

    
 handleMenuOne = () => {
    // do something
    this.setState({open: false});
    this.setState({currency: 'AVAX'})
  };

  handleMenuTwo = () => {
    // do something
    this.setState({open: false});
    this.setState({currency: 'Dollars'})
  };

  render(){
    const currency= this.state.currency
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
            <p style={{alignText:'left'}}>0 {currency}</p>
            <div style={{display:"grid", gridTemplateColumns: "auto auto", position:"relative"}}>
                <input className={styles.input2} placeholder='0.00' id='stakeinput'></input>
                <div style={{ position:"absolute", top:"5px", left:"20px"}}>
                    <p> Quantity</p>
                </div>
            </div>
            <div className={styles.dropdown}>
                <button className={styles.button4} onClick={()=> this.handleOpen()}>{currency}</button> 
                {this.state.open ? (
        <ul className={styles.menu}>
          <li className={styles.menuitem}>
            <button  onClick={()=> this.handleMenuOne()}>AVAX</button>
          </li>
          <li className={styles.menuitem}>
            <button onClick={()=> this.handleMenuTwo()}>Dollar</button>
          </li>
        </ul>
      ) : null}
      {this.state.open ? <div>Is Open</div> : <div>Is Closed</div>}
</div>
                <button className={styles.button3}>BUY</button>
        </div>
    </div>
</div>

)
}

}
export default Stake