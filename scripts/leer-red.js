const { ethers } = require("ethers");

async function main() {
    const rpcUrl = "https://ethereum-sepolia-rpc.publicnode.com";

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
