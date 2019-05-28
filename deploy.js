const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "practice hammer rain adjust huge cash fly chronic boring bless page idle",
  "https://ropsten.infura.io/v3/4a783c478dc3443ebacc8346e5aa4a60"
);

const web3 = new Web3(provider, null, {});

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account: ", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: "0x" + bytecode })
    .send({ from: accounts[0] });

  console.log("Contract deployed to: " + result.options.address);
};

deploy();
