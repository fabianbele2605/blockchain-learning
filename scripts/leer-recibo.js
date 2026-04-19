const { ethers } = require("ethers");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
    const rpcUrl = process.env.ETHEREUM_RPC_URL;
    const txHash = "0x102d6073b8f7b779d42c9a4b6255fd3b96a673c8732eec2b31fb99383d3429a2";

    const provider = new ethers.JsonRpcProvider(rpcUrl);

    const receipt = await provider.getTransactionReceipt(txHash);

    console.log("Hash:", receipt.hash);
    console.log("Bloque:", receipt.blockNumber);
    console.log("Gas usado:", receipt.gasUsed.toString());
    console.log("Gas price efectivo:", receipt.gasPrice.toString());
    console.log("Estado:", receipt.status);
}

main().catch((error) => {
    console.error("Error al leer el recibo:", error);
});