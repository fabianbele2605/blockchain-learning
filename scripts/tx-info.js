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
    if (!tx) {
        console.log("No se encontro la transaccion:", txHash);
        process.exit(1);
    }

    const receipt = await provider.getTransactionReceipt(txHash);
    if (!receipt) {
        console.log("Transaccion encontrada, pero receipt aun no disponible:", txHash);
        process.exit(0);
    }

    const valueWei = tx.value ?? 0n;
    const gasUsed = receipt.gasUsed ?? 0n;

    // En ethers v6, normalmente viene como gasPrice (efectivo).
    const effectiveGasPrice =
        receipt.effectiveGasPrice ??
        receipt.gasPrice ??
        0n;

    const feeWei = gasUsed * effectiveGasPrice;
    const totalWei = valueWei + feeWei;

    console.log("=== TX info ===");
    console.log("Hash:", tx.hash);
    console.log("Desde:", tx.from);
    console.log("Hacia:", tx.to);
    console.log("Tipo:", tx.type);
    console.log("Nonce:", tx.nonce);
    console.log("Bloque:", receipt.blockNumber);
    console.log("Estados:", receipt.status);

    console.log("=== Valores ===");
    console.log("Valor (ETH):", ethers.formatEther(valueWei));
    console.log("Gas usado:", gasUsed.toString());
    console.log("EffectiveGasPrice (Gwei):", ethers.formatUnits(effectiveGasPrice, "gwei"));
    console.log("Fee (ETH):", ethers.formatEther(feeWei));
    console.log("Total (Valor + Fee) (ETH):", ethers.formatEther(totalWei));
}

main().catch((e) => console.error("Error en tx-info:", e));