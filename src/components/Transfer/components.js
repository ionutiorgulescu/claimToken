export const getEtherscanLink= ({txHash, networkId, address}) => {
    let subdomain = '';
    if (networkId === "3") {
        subdomain = 'ropsten.';
    }
    let etherscanLink;
    if (txHash) {
        etherscanLink = `https://${subdomain}etherscan.io/tx/${txHash}`;
    } else {
        etherscanLink = `https://${subdomain}etherscan.io/address/${address}`;
    }
    return etherscanLink;
}