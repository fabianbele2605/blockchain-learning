const { ethers } = require("ethers");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
    const rpcUrl = process.env.ETHEREUM_RPC_URL;

    const provider = new ethers.JsonRpcProvider(rpcUrl);

    const network = await provider.getNetwork();
    const blockNumber = await provider.getBlockNumber();

    console.log("Red conectada:", network.name);
    console.log("Chain ID:", network.chainId.toString());
    console.log("Ultimo bloque:", blockNumber);
}

main().catch((error) => {
    console.error("Error al leer la red:", error);
});
