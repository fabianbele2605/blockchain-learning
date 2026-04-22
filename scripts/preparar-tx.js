const { ethers } = require("ethers");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
    const rpcUrl = process.env.ETHEREUM_RPC_URL;
    const privateKey = process.env.SEPOLIA_PRIVATE_KEY;

    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(privateKey, provider);

    const network = await provider.getNetwork();
    const from = await wallet.getAddress();
    const to = "0x85C1E503284ed6E90fed3999a4053D4585C93dcA";
    const value = ethers.parseEther("0.000001");

    const nonce = await provider.getTransactionCount(from);
    const feeData = await provider.getFeeData();

    const tx = {
        type: 2,
        from,
        to,
        nonce,
        maxFeePerGas: feeData.maxFeePerGas,
        maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
    };

    const gasLimit = await provider.estimateGas(tx);

    const worstCaseFeeWei = gasLimit * (tx.maxFeePerGas ?? 0n);

    console.log("=== Transaccion preparada (NO enviada) ===");
    console.log("Red:", network.name, "chainId:", network.chainId.toString());
    console.log("From:", from);
    console.log("To:", to);
    console.log("Value (ETH):", ethers.formatEther(value));
    console.log("Nonce:", nonce);
    console.log("Gas Limit:", gasLimit.toString());
    console.log("MaxFeePerGas:", (tx.maxFeePerGas ?? 0n).toString());
    console.log("MaxPriorityFeePerGas:", (tx.maxPriorityFeePerGas ?? 0n).toString());
    console.log("Costo max estimado (ETH):", ethers.formatEther(worstCaseFeeWei));
}

main().catch((e) => console.error("Error preparando tx:", e));