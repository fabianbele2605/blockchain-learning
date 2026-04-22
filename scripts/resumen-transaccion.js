const { ethers } = require("ethers");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
    const rpcUrl = process.env.ETHEREUM_RPC_URL;
    const txHash = process.argv[2];

    if (!txHash) {
        console.log("Uso: node scripts/resumen-transaccion.js <txHash>");
        process.exit(1);
    }

    const provider = new ethers.JsonRpcProvider(rpcUrl);

    const tx = await provider.getTransaction(txHash);
    const receipt = await provider.getTransactionReceipt(txHash);

    if (!tx) {
        console.log("No se encontro la transaccion:", txHash);
        process.exit(1);
    }

    console.log("=== Resumen de la transacción ===");
    console.log("Hash:", tx.hash);
    console.log("Desde:", tx.from);
    console.log("Hacia:", tx.to);
    console.log("Valor en ETH:", ethers.formatEther(tx.value));
    console.log("Nonce:", tx.nonce);
    console.log("Tipo:", tx.type);
    console.log("Bloque:", receipt.blockNumber);

    if (!receipt) {
        console.log("Receipt: no disponible aun");
        process.exit(0);
    }

    console.log("=== Receipt ===");
    console.log("Estado:", receipt.status);
    console.log("Bloque:", receipt.blockNumber);
    console.log("Gas usado:", receipt.gasUsed.toString());
    console.log("EffectiveGasPrice:", receipt.gasPrice?.toString?.() ?? "N/A");
}

main().catch((e) => console.error("Error en resumen:", e)); 
