import React from 'react'
import { HashLoader } from 'react-spinners'
import './TransactionLoader.css'

const TransactionLoader = () => {
  return (
    <div className='transaction-loader'>
      <div className='transaction-loader-text'>Swapping in progress ...</div>
      <HashLoader
        className='hash-loader'
        color={'#fff'}
        loading={true}
        size={50}
      />
    </div>
  )
}

export default TransactionLoader
