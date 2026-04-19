const { ethers } = require("ethers");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
    const rpcUrl = process.env.ETHEREUM_RPC_URL;

    const provider = new ethers.JsonRpcProvider(rpcUrl);

    const latestBlockNumber = await provider.getBlockNumber();
    const block = await provider.getBlock(latestBlockNumber);

    console.log("Numero del bloque:", block.number);
    console.log("Hash del bloque:", block.hash);
    console.log("Timestamp:", block.timestamp);
    console.log("Cantidad de transacciones:", block.transactions.length);
}

main().catch((error) => {
    console.error("Error al leer el bloque:", error);
});
