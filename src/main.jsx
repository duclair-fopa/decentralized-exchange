import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Web3OnboardProvider, init } from '@web3-onboard/react'
import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseWalletModule from '@web3-onboard/coinbase'
import infinityWalletWalletModule from '@web3-onboard/infinity-wallet'

const INFURA_KEY = import.meta.env.VITE_INFURA_ID

const chains = [
  {
    id: 1,
    token: 'ETH',
    label: 'Ethereum Mainnet',
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  },
]

const wcInitOptions = {
  projectId: import.meta.env.VITE_PROJECT_ID,

  requiredChains: [1],

  dappUrl: 'https://quickswapp.org/',
}

const walletConnect = walletConnectModule(wcInitOptions)
const infinityWalletSDK = infinityWalletWalletModule()

const coinbaseWalletSdk = coinbaseWalletModule({ darkMode: true })

const web3Onboard = init({
  wallets: [walletConnect, coinbaseWalletSdk, infinityWalletSDK],
  chains,
  appMetadata: {
    name: 'QuickSwap',
    icon: '<svg>QuickSwap</svg>',
    description:
      'QuickSwap is a cryptocurrency exchange that allows to swap BTC and altcoins in an easy way. DiceSwap supports 1000 cryptocurrencies. Make Bitcoin to Ethereum, Litecoin crypto exchanges at the best rates!',
  },
  theme: 'dark',
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <App />
    </Web3OnboardProvider>
  </React.StrictMode>
)
