import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.6.2/ethers.min.js";

let signer = null;
let provider;
let Contract = null;
if (window.ethereum == null) {
    provider = ethers.getDefaultProvider()

} else {
    provider = new ethers.BrowserProvider(window.ethereum)
    
}

const ConnectBtn = document.getElementById("Connectt")
ConnectBtn.addEventListener("click" , Connect)
async function Connect(){
    signer = await provider.getSigner();
    console.log(signer)
}

const TransferBtn = document.getElementById('dymmytran');
TransferBtn.addEventListener('click', Transfer)
async function Transfer(){
    tx = await signer.sendTransaction({
        to: "ethers.eth",
        value: parseEther("1.0")
    });
    receipt = await tx.wait();
}


abi = []
const ConnectConBtn = document.getElementById('ConnectContract');
ConnectConBtn.addEventListener('click', ConnectCon)
async function ConnectCon(){
    Contract = new Contract("smart contract address", abi, signer);
}


async function ContactFunctions(ticket_id){
    Contract.purchaseTicket(ticket_id);
}

//more functions
