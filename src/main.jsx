import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Web3OnboardProvider, init } from '@web3-onboard/react'
import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseWalletModule from '@web3-onboard/coinbase'
import infinityWalletWalletModule from '@web3-onboard/infinity-wallet'

const INFURA_KEY = '35e86f89b81d45a8a62ed9bb6ab1f3e6'

const chains = [
  {
    id: 1,
    token: 'ETH',
    label: 'Ethereum Mainnet',
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  },
]

const wcInitOptions = {
  /**
   * Project ID associated with [WalletConnect account](https://cloud.walletconnect.com)
   */
  projectId: '96376117668837e5de7eb66e0931eebb',
  /**
   * Chains required to be supported by all wallets connecting to your DApp
   */
  requiredChains: [1],
  /**
   * Chains required to be supported by all wallets connecting to your DApp
   */
  // optionalChains: [42161, 11155111, 137, '0x2105', '0xa4ba'],
  /**
   * Defaults to `appMetadata.explore` that is supplied to the web3-onboard init
   * Strongly recommended to provide atleast one URL as it is required by some wallets (i.e. MetaMask)
   * To connect with WalletConnect
   */
  dappUrl: 'https://chariunity.org/',
}

// initialize the module with options
const walletConnect = walletConnectModule(wcInitOptions)
const infinityWalletSDK = infinityWalletWalletModule()

const coinbaseWalletSdk = coinbaseWalletModule({ darkMode: true })

const web3Onboard = init({
  wallets: [walletConnect, coinbaseWalletSdk, infinityWalletSDK],
  chains,
  appMetadata: {
    name: 'DEXchange',
    icon: '<svg>DEXchange</svg>',
    description:
      'DEXchange is a cryptocurrency exchange that allows to swap BTC and altcoins in an easy way. DiceSwap supports 1000 cryptocurrencies. Make Bitcoin to Ethereum, Litecoin crypto exchanges at the best rates!',
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
