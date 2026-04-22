const { ethers } = require("ethers");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
    const rpcUrl = process.env.ETHEREUM_RPC_URL;
    const txHash = process.argv[2];

    if (!txHash) {
        console.log("Uso: node scripts/leer-recibo.js <txHash>");
        process.exit(1);
    }

    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const receipt = await provider.getTransactionReceipt(txHash);

    if (!receipt) {
        console.log("No hay receipt aun (pendiente o tx invalida):", txHash);
        process.exit(1);
    }

    console.log("Hash:", receipt.hash);
    console.log("Estado:", receipt.status);
    console.log("Bloque:", receipt.blockNumber);
    console.log("Gas usado:", receipt.gasUsed.toString());
    console.log("EffectiveGasPrice:", receipt.gasPrice?.toString?.() ?? "N/A");
}

main().catch((e) => console.error("Error al leer el recibo:", e));