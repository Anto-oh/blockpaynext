import React, {Component} from 'react';
import Stake from './Stake'
import Web3 from 'web3'
import * as ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import styles from '../styles/Main.module.css'

class Main extends Component{
 render(){
return(
    <>
<div className='Main' style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
<h1 style={{fontWeight: '500'}}>Liquid Staking</h1>
<h4 style={{fontWeight: '100'}}>Stake AVAX and receive sAVAX while staking</h4>

<div className={styles.button1}> </div>
<Stake />
 <button className={styles.butcon} >Claim</button> 

</div>

</>
)
}
}
export default Main