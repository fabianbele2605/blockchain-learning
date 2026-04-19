const { ethers } = require("ethers");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
    const rpcUrl = process.env.ETHEREUM_RPC_URL;

    const provider = new ethers.JsonRpcProvider(rpcUrl);

    const laterstBlockNumber = await provider.getBlockNumber();
    const block = await provider.getBlock(laterstBlockNumber);

    const blockDate = new Date(block.timestamp * 1000);

    console.log("=== Resumen del bloque ===");
    console.log("Numero:", block.number);
    console.log("Hash:", block.hash);
    console.log("Fecha:", blockDate.toLocaleString());
    console.log("Transacciones:", block.transactions.length);
    console.log("Gas usado:", block.gasUsed.toString());
    console.log("Gas limite:", block.gasLimit.toString());
}

main().catch((error) => {
    console.error("Error al generar resumen del bloque:", error);
});