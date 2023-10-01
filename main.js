import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'
import { configureChains, createConfig } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'

import { readContract, writeContract, prepareWriteContract, waitForTransaction, getAccount, sendTransaction, prepareSendTransaction } from '@wagmi/core'

import { parseEther } from 'viem'

const chains = [mainnet]
const projectId = 'YOUR_PROJECT_ID'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})

const ethereumClient = new EthereumClient(wagmiConfig, chains)
const web3modal = new Web3Modal({ projectId }, ethereumClient)

window.web3modal = web3modal;
window.readContract = readContract;
window.writeContract = writeContract;
window.prepareWriteContract = prepareWriteContract;
window.getAccount = getAccount;
window.prepareSendTransaction = prepareSendTransaction;
window.sendTransaction = sendTransaction;
window.parseEther = parseEther;
window.waitForTransaction = waitForTransaction;