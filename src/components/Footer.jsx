import { useConnectWallet } from '@web3-onboard/react'

const Footer = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

  return (
    <div className='w-full dark:bg-gray-800'>
      <div className='max-w-2xl mx-auto text-white py-10'>
        <div className='text-center'>
          <h3 className='text-4xl lg:text-5xl font-extrabold text-white mb-6 md:!leading-[55px] text-center'>
            Download our app
          </h3>
          <p> Trade Strong. All Markets, Every Moment. </p>
          <div className='flex justify-center my-10'>
            <div
              onClick={() => connect()}
              className='flex items-center border rounded-lg px-4 py-2 w-52 mx-2 hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer'
            >
              <img
                src='https://cdn-icons-png.flaticon.com/512/888/888857.png'
                className='w-7 md:w-8'
                alt='Google Play Store'
              />
              <div className='text-left ml-3'>
                <p className='text-xs text-gray-200'>Download on </p>
                <p className='text-sm md:text-base'> Google Play Store </p>
              </div>
            </div>
            <div
              onClick={() => connect()}
              className='flex items-center border rounded-lg px-4 py-2 w-44 mx-2 hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer'
            >
              <img
                src='https://cdn-icons-png.flaticon.com/512/888/888841.png'
                className='w-7 md:w-8'
                alt='Apple Store'
              />
              <div className='text-left ml-3'>
                <p className='text-xs text-gray-200'>Download on </p>
                <p className='text-sm md:text-base'> Apple Store </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-white'>
          <p className='order-2 md:order-1 mt-8 md:mt-0'>
            &copy; QuickSwap, 2024.
          </p>
          <div className='order-1 md:order-2'>
            <span
              className='px-2 hover:text-gray-400 transition duration-300 ease-in-out cursor-pointer'
              onClick={() => connect()}
            >
              About us
            </span>
            <span
              onClick={() => connect()}
              className='px-2 border-l hover:text-gray-400 transition duration-300 ease-in-out cursor-pointer'
            >
              Contact us
            </span>
            <span
              onClick={() => connect()}
              className='px-2 border-l hover:text-gray-400 transition duration-300 ease-in-out cursor-pointer'
            >
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
