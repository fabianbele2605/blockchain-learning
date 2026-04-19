const { ethers } = require("ethers");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
    const rpcUrl = process.env.ETHEREUM_RPC_URL;
    const txHash = "0x102d6073b8f7b779d42c9a4b6255fd3b96a673c8732eec2b31fb99383d3429a2";

    const provider = new ethers.JsonRpcProvider(rpcUrl);

    const tx = await provider.getTransaction(txHash);
    const receipt = await provider.getTransactionReceipt(txHash);

    console.log("=== Resumen de la transacción ===");
    console.log("Hash:", tx.hash);
    console.log("Desde:", tx.from);
    console.log("Hacia:", tx.to);
    console.log("Valor en ETH:", ethers.formatEther(tx.value));
    console.log("Nonce:", tx.nonce);
    console.log("Bloque:", receipt.blockNumber);
    console.log("Gas usado:", receipt.gasUsed.toString());
    console.log("Estado:", receipt.status === 1 ? "Exitosa" : "Fallida");
}

main().catch((error) => {
    console.error("Error al generar resumen de la transaccion:", error);
});