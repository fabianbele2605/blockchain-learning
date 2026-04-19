const { ethers } = require("ethers");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
    const rpcUrl = process.env.ETHEREUM_RPC_URL;
    const walletAddress = process.env.WALLET_RECEIVE_ETHEREUM_ADDRESS;

    const provider = new ethers.JsonRpcProvider(rpcUrl);

    const balanceWei = await provider.getBalance(walletAddress);
    const balanceEth = ethers.formatEther(balanceWei);

    console.log("Direccion:", walletAddress);
    console.log("Balance en wei:", balanceWei.toString());
    console.log("Balance en Sepolia ETH:", balanceEth);
}

main().catch((error) => {
    console.error("Error al leer el balance:", error);
});