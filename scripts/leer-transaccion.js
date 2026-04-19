const { ethers } = require("ethers");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
    const rpcUrl = process.env.ETHEREUM_RPC_URL;
    const txHash = "0x102d6073b8f7b779d42c9a4b6255fd3b96a673c8732eec2b31fb99383d3429a2";

    const provider = new ethers.JsonRpcProvider(rpcUrl);

    const tx = await provider.getTransaction(txHash);

    console.log("Hash:", tx.hash);
    console.log("Desde:", tx.from);
    console.log("hacia:", tx.to);
    console.log("Valor en wei:", tx.value.toString());
    console.log("Valor en ETH:", ethers.formatEther(tx.value));
    console.log("Nonce:", tx.nonce);
}

main().catch((error) => {
    console.error("Error al leer la transacción:", error);
});