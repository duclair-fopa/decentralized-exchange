import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavItems = () => {
  const SWAP = 'Swap'
  const POOL = 'Tokens'

  const [selectedNavItem, setSelectedNavItem] = useState(SWAP)

  return (
    <div className='bg-zinc-900 h-fit flex items-center justify-around rounded-full mx-6'>
      <Link to='/swap'>
        <p
          className={getNavIconClassName(SWAP)}
          onClick={() => setSelectedNavItem(SWAP)}
        >
          {SWAP}
        </p>
      </Link>
      <Link to='/tokens'>
        <p
          className={getNavIconClassName(POOL)}
          onClick={() => setSelectedNavItem(POOL)}
        >
          {POOL}
        </p>
      </Link>
    </div>
  )

  function getNavIconClassName(name) {
    let className =
      'p-1 px-4 cursor-pointer border-[4px] border-transparent flex items-center'
    className +=
      name === selectedNavItem
        ? ' bg-zinc-800 border-zinc-900 rounded-full'
        : ''
    return className
  }
}

export default NavItems
