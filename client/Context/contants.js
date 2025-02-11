import { ethers } from "ethers";
import Web3Modal from "web3modal";
import crowdFunding from "./CrowdFunding.json";

export const CrowdFundingAddress = "0xa2346ad0829aaF279DcbB24560A3114A9E62d024";

export const CrowdFundingABI = crowdFunding.abi;

// NETWORK
const networks = {
  open_campus_codex: {
    chainId: `0x${Number(656476).toString(16)}`,
    chainName: "Open Campus Codex",
    nativeCurrency: {
      name: "EDU",
      symbol: "EDU",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.open-campus-codex.gelato.digital"],
    blockExplorerUrls: ["https://opencampus-codex.blockscout.com"],
  },
  localhost: {
    chainId: `0x${Number(5003).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "EDU",
      symbol: "EDU",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.open-campus-codex.gelato.digital"],
    blockExplorerUrls: ["https://opencampus-codex.blockscout.com"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const handleNetworkSwitch = async () => {
  const networkName = "open_campus_codex";
  await changeNetwork({ networkName });
};
