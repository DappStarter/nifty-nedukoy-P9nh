require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hover enroll other venture street crawl mushroom pulp hunt sister army ghost'; 
let testAccounts = [
"0x6ec8fb6a75956f5065b61ce144d561bcf43cd6c8ac31becf779863756b944848",
"0x31e0bb3097f222cfdc73d414e8eeeefba240163d2296e6bc6cdd999fac7b93d2",
"0x3799005529bc824c0697b8572df0e67d3b6b1c7ca7943959ecfa3c0ae5ef1810",
"0x7175dc1054298f83af063a22cea4c3ea5e78f678df3ea438c2f1802ba02d5a7c",
"0x93030625bd70942b67bb15bf2fc2a6ec981339bdc5c65170d035dddd86bbf611",
"0x7e8bbdc944cf872423fbbcb0ba34cd83d08320e05e3f16e5eed2e75420b8dafa",
"0x4760eeb4934f810e0dd6432b6dd14b5ff7aaa72bd621ab5103f1c339bc6e06c6",
"0xee4f8d035202c7d13a552a03b68440cf483ff4ef2b4899cb536b20a4db8df8c2",
"0x00eac614218f0ebef41eb003a0428a0d3f0b6f6febacf2047596491e79d075b5",
"0x5fabb95a6bbbc618a84f0c5486b103cc572608790a25b1f6434956110d47fd64"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


