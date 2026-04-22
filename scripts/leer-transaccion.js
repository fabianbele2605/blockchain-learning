const { ethers } = require("ethers");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
  const rpcUrl = process.env.ETHEREUM_RPC_URL;
  const txHash = process.argv[2];

  if (!txHash) {
    console.log("Uso: node scripts/leer-transaccion.js <txHash>");
    process.exit(1);
  }

  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const tx = await provider.getTransaction(txHash);

  if (!tx) {
    console.log("No se encontro la transaccion:", txHash);
    process.exit(1);
  }

  console.log("Hash:", tx.hash);
  console.log("Desde:", tx.from);
  console.log("Hacia:", tx.to);
  console.log("Valor (wei):", tx.value.toString());
  console.log("Valor (ETH):", ethers.formatEther(tx.value));
  console.log("Nonce:", tx.nonce);
  console.log("Tipo:", tx.type);
  console.log("Bloque:", tx.blockNumber ?? "pendiente");
  console.log("GasLimit:", tx.gasLimit?.toString?.() ?? "N/A");
}

main().catch((error) => {
  console.error("Error al leer la transaccion:", error);
});
