import { css } from '@emotion/react'
import { HashLoader } from 'react-spinners'

const cssOverride = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`

const TransactionLoader = () => {
  return (
    <div
      className='text-white d-flex flex-column justify-content-center align-items-center'
      style={{ height: '24rem', width: '18rem' }}
    >
      <div className='fw-semibold fs-4 mb-3'>Swapping in progress ...</div>
      <HashLoader color={'#fff'} loading={true} size={50} />
    </div>
  )
}

export default TransactionLoader
