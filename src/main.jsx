import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Web3OnboardProvider, init } from '@web3-onboard/react'
import walletConnectModule from '@web3-onboard/walletconnect'
import injectedModule from '@web3-onboard/injected-wallets'

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
const injected = injectedModule()

const web3Onboard = init({
  wallets: window?.ethereum ? [injected, walletConnect] : [walletConnect],
  chains,
  appMetadata: {
    name: 'QuickSwap',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" version="1.1" viewBox="0 0 16.933 16.933">
            <g transform="translate(-43.614 -50.361)">
              <rect x="44.342" y="51.071" width="15.482" height="15.482" fill="#fff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3229"/>
              <g stroke-width="0">
              <circle cx="52.082" cy="58.851" r="1.2191"/>
              <circle cx="46.868" cy="53.896" r="1.2191"/>
              <circle cx="57.408" cy="64.003" r="1.2191"/>
              </g>
            </g>
            <g transform="matrix(.93887 0 0 .93887 -118.66 -82.02)">
              <text x="78.373802" y="66.259865" fill="#000000" font-family="Impact" font-size="8.9737px" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" xml:space="preserve"><tspan x="78.373802" y="66.259865" font-family="Impact" stroke-width="0">DICESWAP</tspan></text>
              <g transform="matrix(.12685 0 0 .12685 73.895 51.762)">
              <g transform="translate(15.652 -10.343)">
                <rect x="61.027" y="51.683" width="15.482" height="15.482" fill="#fff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3229"/>
                <g stroke-width="0">
                <circle cx="69.059" cy="59.463" r="1.2191"/>
                <circle cx="63.553" cy="54.508" r="1.2191"/>
                <circle cx="74.093" cy="64.615" r="1.2191"/>
                </g>
              </g>
              </g>
            </g>
          </svg>`,
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
