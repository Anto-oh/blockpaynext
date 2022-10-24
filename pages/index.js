import '../styles/Home.module.css'
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Home() {


  const [walletAddress, setwalletAddress] = useState("Connect Wallet")
  const [contractAccount, setContractAccount] = useState("")
  const [balanceState, setBalanceState] = useState("0")
/*
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined'){
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts' })


        const abbreviate = (input) => {
          
          return input === "Wallet" ? input : [input.substring(0,6), "...", input.substring(input.length-4, input.length)].join(''); 
      };
      
      const result = abbreviate(accounts[0]);
      
      console.log(result);


        setwalletAddress(result)



      
    
              window.web3 = new Web3(window.ethereum)
              const web3 = window.web3
          
              /*const accounts = await web3.eth.getAccounts()
              this.setState({walletAddress: accounts[0]})
              console.log(accounts)
          
              const networkId = await web3.eth.net.getId()
              
              if (networkId !== 43114 && networkId !== 43113){
                  window.alert('Please conect to Avalanche network.')
                  console.log(networkId)
                }
          
              let abi = [{"inputs": [{"internalType": "string", "name": "name_", "type": "string"}, {"internalType": "string", "name": "symbol_", "type": "string"}, {"internalType": "uint256", "name": "totalU", "type": "uint256"}], "stateMutability": "nonpayable", "type": "constructor"}, {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {"indexed": true, "internalType": "address", "name": "spender", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}], "name": "Approval", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "from", "type": "address"}, {"indexed": true, "internalType": "address", "name": "to", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}], "name": "Transfer", "type": "event"}, {"inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {"internalType": "address", "name": "spender", "type": "address"}], "name": "allowance", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "approve", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "account", "type": "address"}], "name": "balanceOf", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "decimals", "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {"internalType": "uint256", "name": "subtractedValue", "type": "uint256"}], "name": "decreaseAllowance", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {"internalType": "uint256", "name": "addedValue", "type": "uint256"}], "name": "increaseAllowance", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "name", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "symbol", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "totalSupply", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "transfer", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "from", "type": "address"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "transferFrom", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}]
              let badd
              if (networkId === 43114){
                 badd = '0x8CcEE641C3D937dC89D1d94fe4D8051624042Fcf'
              }
          
              if (networkId === 43113){
                 badd = '0x5736d8B23E96C4E49542b660cfec0dE4b4562A2e'
              }
          
              console.log(badd)
                
              const sdrs = new web3.eth.Contract(abi, badd)
              setContractAccount( sdrs )
          
              let balance = await sdrs.methods.balanceOf(accounts[0]).call()
              setBalanceState(web3.utils.fromWei( balance,'ether') )
      console.log(balance)
              
            
      
        
          

        

  }
}*/


  return (

    <div className="App">
<Navbar />
<Main />

   
    </div>
    
  );
}
