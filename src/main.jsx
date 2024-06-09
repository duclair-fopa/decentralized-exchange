import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import merge from 'lodash.merge'
import '@rainbow-me/rainbowkit/styles.css'

import {
  getDefaultConfig,
  RainbowKitProvider,
  midnightTheme,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit'
import { WagmiProvider, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import {
  argentWallet,
  ledgerWallet,
  trustWallet,
  uniswapWallet,
} from '@rainbow-me/rainbowkit/wallets'

const { wallets } = getDefaultWallets()

const projectId = import.meta.env.VITE_PROJECT_ID
const infuraId = import.meta.env.VITE_INFURA_ID

const ganache = {
  id: 1337,
  name: 'Ganache',
  iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
  iconBackground: '#fff',
  nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8545'] },
  },
}

const chains = [mainnet]

const config = getDefaultConfig({
  appName: 'DexSwap',
  projectId,
  chains,
  transports: {
    [mainnet.id]: http(`https://mainnet.infura.io/v3/${infuraId}`),
    // [sepolia.id]: http(`https://sepolia.infura.io/v3/${infuraId}`),
    // [ganache.id]: http('http://127.0.0.1:8545'),
  },
  wallets: [
    ...wallets,
    {
      groupName: 'More',
      wallets: [trustWallet, argentWallet, ledgerWallet, uniswapWallet],
    },
  ],
  appUrl: 'https://chariunity.org',
  appDescription: 'A decentralized token exchange app',
})

const queryClient = new QueryClient()

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: '#18181b',
    accentColorForeground: '#fff',
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={myTheme}>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
)
