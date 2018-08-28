const eth2air = require('./node_modules/eth2air-core');

function parse_query_string(query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        // If first entry with this name
        if (typeof query_string[key] === "undefined") {
            query_string[key] = decodeURIComponent(value);
            // If second entry with this name
        } else if (typeof query_string[key] === "string") {
            var arr = [query_string[key], decodeURIComponent(value)];
            query_string[key] = arr;
            // If third or later entry with this name
        } else {
            query_string[key].push(decodeURIComponent(value));
        }
    }
    return query_string;
}

let query = window.location.search.substring(1);
let qs = parse_query_string(query);


let receiverAddress = qs.rv;
let transitPK = qs.pk;
let contractAddress = qs.c;
let keyR = qs.r;
let keyS = qs.s;
let keyV = qs.v;
let networkId = qs.n;

eth2air.claimTokens({
    receiverAddress, // address to receive tokens to
    contractAddress, // address of the airdrop contract from he
    transitPK,  // transit private key from the claim URL
    keyR,  // signature param (r) from the claim URL
    keyS,  // signature param (s) from the claim URL
    keyV,  // signature param (v) from the claim URL
    networkId // id of the connected Network (Mainnet - '1', Ropsten - '3')
}).then((result) => {
    if (!result.success) {
        throw new Error(result.errorMessage || "Server error");
    }

    // Server returns Hash of the transaction submitted by the Server to the Airdrop Contract
    const { txHash } = result;

    console.log(txHash);
})