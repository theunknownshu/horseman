require("dotenv").config();
// const rinkebyKey = process.env.REACT_APP_ALCHEMY_RINKEY;
const mainnetKey = process.env.REACT_APP_ALCHEMY_MAINNET;
const testnetKey = process.env.REACT_APP_ALCHEMY_RINKEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// var Web3 = require("web3");

const web3 = createAlchemyWeb3(testnetKey);
// const web3 = new Web3(new Web3.providers.HttpProvider( "https://rinkeby.infura.io/v3/aba36d08da514e4897c41d9063574996"));
const contractABI = require("../HorsemanContract.json");
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

export const HorsemanContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

export const loadTotalMintCount = async () => {
  var message = await HorsemanContract.methods.totalMint().call();
  return message;
};

export const getCurrentMessage = async () => {
  var message = await HorsemanContract.methods.message().call();
  return message;
};

/** Connect to Metamask */
export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
        success: true
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
        success: false
      };
    }
  } else {
    return {
      address: "",
      success: false,
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://metamask.io/download.html`}
            >
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      )
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts"
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Write a message in the text-field above."
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button."
        };
      }
    } catch (err) {
      return { address: "", status: "😥 " + err.message };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://metamask.io/download.html`}
            >
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      )
    };
  }
};

export const updateMessage = async (address, message) => {
  //input error handling
  if (!window.ethereum || address === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the message on the blockchain."
    };
  }

  if (message.trim() === "") {
    return {
      status: "❌ Your message cannot be an empty string."
    };
  }
  //set up transaction parameters
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    data: HorsemanContract.methods.update(message).encodeABI()
  };

  //sign the transaction
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters]
    });
    return {
      status: (
        <span>
          ✅{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://rinkeby.etherscan.io/tx/${txHash}`}
          >
            View the status of your transaction on Etherscan!
          </a>
          <br />
          ℹ️ Once the transaction is verified by the network, the message will
          be updated automatically.
        </span>
      )
    };
  } catch (error) {
    return {
      status: "😥 " + error.message
    };
  }
};

export const mintHorseCount = async (address, mintCount, nftPrice) => {
  console.log("parameter price==", nftPrice);
  const correctPrice = web3.utils.toBN(
    web3.utils.toWei(nftPrice, "ether").toString()
  );
  console.log("calced price", correctPrice);
  // console.log(correctPrice*mintCount);
  // console.log(address);
  if (!window.ethereum || address === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the message on the blockchain."
    };
  }
  //set up transaction parameters

  let e;
  try {
    e = await HorsemanContract.methods.mint(address, mintCount).estimateGas({
      // value: correctPrice * mintCount,
      value: web3.utils.toHex(correctPrice * mintCount),
      from: address
    });
  } catch (u) {
    console.log("catch fail", u);
    return { success: false, type: "estimategas" };
  }
  let d = await web3.eth.getGasPrice();

  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    gas: web3.utils.toHex(parseInt(e)),
    gasPrice: web3.utils.toHex(parseInt(1.2 * d)),
    maxFeePerGas: null,
    // value: correctPrice * mintCount,
    value: web3.utils.toHex(correctPrice * mintCount),
    // gasLimit: 21000,
    // gas: web3.utils.toHex(21000),
    data: HorsemanContract.methods.mint(address, mintCount).encodeABI()
  };
  // console.log(transactionParameters.value);
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters]
    });

    return {
      status: (
        <span>
          ✅{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://rinkeby.etherscan.io/tx/${txHash}`}
          >
            View the status of your transaction on Etherscan!
          </a>
          <br />
          ℹ️ Once the transaction is verified by the network, the message will
          be updated automatically.
        </span>
      ),
      success: true
    };
  } catch (error) {
    console.log(error);
    return {
      status: "😥 " + error.message
    };
  }
};

export const Reserve = async (address, mintCount) => {
  if (!window.ethereum || address === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the message on the blockchain."
    };
  }
  //set up transaction parameters
  console.log(mintCount);
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    data: HorsemanContract.methods.reserve(mintCount).encodeABI()
  };

  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters]
    });

    return {
      status: (
        <span>
          ✅{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://rinkeby.etherscan.io/tx/${txHash}`}
          >
            View the status of your transaction on Etherscan!
          </a>
          <br />
          ℹ️ Once the transaction is verified by the network, the message will
          be updated automatically.
        </span>
      )
    };
  } catch (error) {
    console.log(error);
    return {
      status: "😥 " + error.message
    };
  }
};

export const Pause = async (address, flag) => {
  if (!window.ethereum || address === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the message on the blockchain."
    };
  }
  //set up transaction parameters
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    data: HorsemanContract.methods.pause(flag).encodeABI()
  };

  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters]
    });

    return {
      status: (
        <span>
          ✅{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://rinkeby.etherscan.io/tx/${txHash}`}
          >
            View the status of your transaction on Etherscan!
          </a>
          <br />
          ℹ️ Once the transaction is verified by the network, the message will
          be updated automatically.
        </span>
      )
    };
  } catch (error) {
    console.log(error);
    return {
      status: "😥 " + error.message
    };
  }
};

export const pauseMinting = async (address, value) => {
  //input error handling
  if (!window.ethereum || address === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the message on the blockchain."
    };
  }
  //set up transaction parameters
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    data: HorsemanContract.methods.pause(value).encodeABI()
  };

  //sign the transaction
  try {
    await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters]
    });

    return {
      status: "Minting has been successfully paused"
    };
  } catch (error) {
    console.log(error);
    return {
      status: "😥 " + error.message
    };
  }
};

export const withdrawAll = async (address, mintCount) => {
  //input error handling
  if (!window.ethereum || address === null) {
    return {
      status:
        "💡 Connect your Metamask wallet to update the message on the blockchain."
    };
  }
  //set up transaction parameters
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    data: HorsemanContract.methods.mint(address, mintCount).encodeABI()
  };

  //sign the transaction
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters]
    });

    return {
      status: (
        <span>
          ✅{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://rinkeby.etherscan.io/tx/${txHash}`}
          >
            View the status of your transaction on Etherscan!
          </a>
          <br />
          ℹ️ Once the transaction is verified by the network, the message will
          be updated automatically.
        </span>
      )
    };
  } catch (error) {
    console.log(error);
    return {
      status: "😥 " + error.message
    };
  }
};

// export const getCurrentWalletBalance = async (address) => {
//   await web3.eth.getBalance(address, (err, balance) => {
//     console.log(address + " Balance: ", web3.utils.fromWei(balance));
//     window.alert(web3.utils.fromWei(balance));
//     // return { amount: web3.utils.fromWei(balance) };
//   });
//   // return balance;
// };
