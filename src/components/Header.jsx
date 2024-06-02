import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  return (
    <nav className='navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5'>
      <Link to='/' className='navbar-brand d-flex align-items-center'>
        <h2 className='m-0 text-primary'>
          <img
            className='img-fluid me-2'
            src='/img/icon-1.png'
            alt=''
            style={{ width: '45px' }}
          />
          DexSwap
        </h2>
      </Link>
      <button
        type='button'
        className='navbar-toggler'
        data-bs-toggle='collapse'
        data-bs-target='#navbarCollapse'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarCollapse'>
        <div className='navbar-nav ms-auto py-4 py-lg-0'>
          <div>
            {location.pathname.includes('swap') ? (
              <a href='#' className='nav-item nav-link'>
                <ConnectButton />
              </a>
            ) : (
              <Link to='/swap' className='nav-item nav-link active'>
                Trade on DexSwap
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header
