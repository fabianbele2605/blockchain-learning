const { ethers } = require("ethers");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
    const provider = new ethers.JsonRpcProvider(process.env.ETHEREUM_RPC_URL);
    const wallet = new ethers.Wallet(process.env.SEPOLIA_PRIVATE_KEY, provider);

    const network = await provider.getNetwork();
    const from = await wallet.getAddress();
    const to = from; // Enviar a uno mismo
    const value = ethers.parseEther("0.000001");

    const nonce = await provider.getTransactionCount(from);
    const feeData = await provider.getFeeData();

    const tx = {
        type: 2,
        from,
        to,
        value,
        nonce,
        maxFeePerGas: feeData.maxFeePerGas,
        maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
    };

    tx.gasLimit = await provider.estimateGas({ ...tx, from });

    const signedTx = await wallet.signTransaction(tx);
    console.log("SignedTx:", signedTx);
    console.log("TxHash (calculado):", ethers.keccak256(signedTx));
}

main().catch((e) => console.error("Error firmando tx:", e));