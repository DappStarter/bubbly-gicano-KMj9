require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name recipe pitch history hover kangaroo army genuine'; 
let testAccounts = [
"0x29bc1a32746e1f9c20a58101ee7736d7f63bcfe07b7a5749a6f6d027d30fc2d2",
"0x680912e610ec6fea007b12f1deaa3f00f7dce31c69d48faaa8e254a41faa371b",
"0x3882cb1b3cca2d1ccf3ea252a20102decfb76418773fe49de3176e12f71a6048",
"0x141b3d98e2a18d0caf5370b0439ef2779c3459b5e9fec5d0b912aa6f96c4ced8",
"0x8d1d28fa5fa8cf2da1e54c4bdd9cb474a9a68aa577fb8b813d133740ee6a4d2e",
"0x1551fa543877ea4a6de3e28ddb9f0595a45c5ecae2ac0c0b63c3a3d0d1e94681",
"0x4b758f8ac2e1b178f0447794405ba4aaa69773e48fdfeadd4a168c6f4e4521ed",
"0xca77835239efa1db1ddc16d112060de2282b923e6621b4f74437b30d3fd53cea",
"0xd8e8882a32050a32a7774b2a61c60fa10c86676ae3601743d02092ef809bf5af",
"0x5d1280f133f44bad4b779f3133a05158b6c3198ee68e6948d60ec0171321c1e3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

