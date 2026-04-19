const { ethers } = require("ethers");

async function main() {
    const rpcUrl = "https://ethereum-sepolia-rpc.publicnode.com";
    const walletAddress = "0x85C1E503284ed6E90fed3999a4053D4585C93dcA";

    const provider = new ethers.JsonRpcProvider(rpcUrl);

    const balanceWei = await provider.getBalance(walletAddress);
    const balanceEth = ethers.formatEther(balanceWei);

    console.log("Direccion:", walletAddress);
    console.log("Balance en wei:", balanceWei.toString());
    console.log("Balance en Sepolia ETH:", balanceEth);
}

main().catch((error) => {
    console.error("Error al leer el balance:", error);
});