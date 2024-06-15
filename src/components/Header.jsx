import { useState } from 'react'
import logo from '../assets/uniswap.png'
import { useConnectWallet } from '@web3-onboard/react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

  return (
    <header className='bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3'>
      <div className='flex items-center justify-between px-4 py-3 sm:p-0'>
        <Link to='/'>
          <div className='flex items-center'>
            <img className='h-8' src={logo} alt='Workcation' />
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              DexSwap
            </span>
          </div>
        </Link>
        <div className='sm:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type='button'
            className='block text-gray-500 hover:text-white focus:text-white focus:outline-none'
          >
            <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
              {isOpen ? (
                <path
                  fillRule='evenodd'
                  d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                />
              ) : (
                <path
                  fillRule='evenodd'
                  d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z'
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } px-2 pt-2 pb-4 sm:flex sm:p-0`}
      >
        {location.pathname.includes('swap') ? (
          <a
            href='#'
            className='block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800'
          >
            <button
              disabled={connecting}
              onClick={() => (wallet ? disconnect(wallet) : connect())}
              type='button'
              className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
            >
              {connecting ? 'Connecting' : wallet ? 'Disconnect' : 'Connect'}
            </button>
          </a>
        ) : (
          <Link
            to='/swap'
            className='mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2'
          >
            Trade on DexSwap
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
