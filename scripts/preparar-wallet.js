const { ethers } = require("ethers");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
    const rpcUrl = process.env.ETHEREUM_RPC_URL;
    const privateKey = process.env.SEPOLIA_PRIVATE_KEY;

    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(privateKey, provider);

    const address = await wallet.getAddress();
    const balance = await provider.getBalance(address);
    const balanceEth = ethers.formatEther(balance);

    console.log("Wallet preparada correctamente");
    console.log("Direccion:", address);
    console.log("Balance en SepoliaETH:", balanceEth);
}

main().catch((error) => {
    console.error("Error al preparar la wallet:", error);
});