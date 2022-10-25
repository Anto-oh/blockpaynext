import React, {useEffect, useState, Component} from 'react';
import Stake from './Stake'
import Web3 from 'web3'
import * as ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import styles from '../styles/Main.module.css'
function Main(){
 
return(
    <>
<div className='Main' style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
<h1 style={{fontWeight: '500'}}>Liquid Staking</h1>
<h4 style={{fontWeight: '100'}}>Stake AVAX and receive sAVAX while staking</h4>

<div className={styles.button1}> </div>
<Stake />
 <button className={styles.butcon} >Claim</button> 

</div>

<table align="center" className={styles.table}>
    <tr>
        <th>Initial date</th>
        <th>Staked</th>
        <th>Staking period</th>
        <th>End date</th>
        <th>Earned (+initial)</th>
    </tr>

    <tr>
        <td>10/10/22</td>
        <td>5,029 BPAY</td>
        <td>1 year (30% ROI)</td>
        <td>10/10/23</td>
        <td>6,537.7 BPAY</td>
    </tr>

    <tr>
        <td>11/10/22</td>
        <td>13,000 BPAY</td>
        <td>1.5 years (50% ROI)</td>
        <td>11/04/24</td>
        <td>19,500 BPAY</td>
    </tr>

    <tr>
        <td>15/10/22</td>
        <td>1,000 BPAY</td>
        <td>1 year (30% ROI)</td>
        <td>15/10/23</td>
        <td>1,300 BPAY</td>
    </tr>

</table>


</>
)
}
export default Main