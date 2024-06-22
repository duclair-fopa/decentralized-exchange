import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderWrapper from './_SlickSliderStyle'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import exchangeSvg from '../assets/exchange.svg'
import faqSvg from '../assets/faq.svg'
import heroSvg from '../assets/hero.svg'
import Review from './Review'
import { Disclosure } from '@headlessui/react'

function Home() {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-[#2D242F]'>
      <section className='py-8 z-10'>
        <div className='flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto'>
          <div className='flex flex-col gap-4 w-full md:w-1/2 py-8 text-center'>
            <h2 className='text-5xl lg:text-6xl font-extrabold text-white mb-6 md:!leading-[55px]'>
              Start Swap Cryptocurrencies
            </h2>
            <p>
              QuickSwap finds the lowest price for your trade across all
              exchanges and aggregators, such as Uniswap and 1inch - and
              protects you from MEV, unlike the others.
            </p>
          </div>
          <div className='w-full md:w-1/2 py-8'>
            <img src={heroSvg} className='g-image' alt='' />
          </div>
        </div>
      </section>

      <div>
        <link href='https://unpkg.com/pattern.css' rel='stylesheet' />
        <section className='text-gray-200'>
          <div className='max-w-6xl mx-auto px-5 py-5'>
            <div className='text-center mb-20'>
              <h2 className='text-4xl lg:text-5xl font-extrabold text-white mb-6 md:!leading-[55px] text-center'>
                Features
              </h2>
              <div className='flex mt-6 justify-center'>
                <div className='w-16 h-1 rounded-full bg-indigo-500 inline-flex'></div>
              </div>
            </div>
            <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'>
              <div className='p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col'>
                <div className='pattern-dots-md gray-light'>
                  <div className='rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6'>
                    <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2'>
                      <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
                        ></path>
                      </svg>
                    </div>
                    <div className='flex-grow'>
                      <h2 className='text-xl title-font font-medium mb-3'>
                        Sign-up is not required
                      </h2>
                      <p className='leading-relaxed text-sm text-justify'>
                        QuickSwap provides cryptocurrency exchange without
                        registration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col'>
                <div className='pattern-dots-md gray-light'>
                  <div className='rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6'>
                    <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0'>
                      <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                        ></path>
                      </svg>
                    </div>
                    <div className='flex-grow'>
                      <h2 className='text-xl title-font font-medium mb-3'>
                        1000 cryptocurrencies
                      </h2>
                      <p className='leading-relaxed text-sm text-justify'>
                        Hundreds of crypto and fiat currencies are available for
                        exchange.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col'>
                <div className='pattern-dots-md gray-light'>
                  <div className='rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6'>
                    <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0'>
                      <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
                        ></path>
                      </svg>
                    </div>
                    <div className='flex-grow'>
                      <h2 className='text-xl title-font font-medium mb-3'>
                        You won&apos;t be left alone
                      </h2>
                      <p className='leading-relaxed text-sm text-justify'>
                        Our support team is easy to reach and ready to answer
                        your questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Review />

      <div className='p-8 font-[sans-serif]'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-4'>
          <div className='text-center md:text-left'>
            <h2 className='text-4xl lg:text-5xl font-extrabold text-white mb-6 md:!leading-[55px]'>
              Start Swap Cryptocurrencies
            </h2>
            <p className='text-lg lg:text-xl text-white mb-8'>
              Just make the first exchange to see how easy and profitable it is.
            </p>
            <Link
              to='/swap'
              className='bg-[#a91079] hover:bg-opacity-80 text-white py-3 px-10 rounded-full text-lg lg:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl inline-block'
            >
              Create Exchange
            </Link>
          </div>
          <div className='text-center'>
            <img
              src={exchangeSvg}
              alt='Premium Benefits'
              className='w-11/12 mx-auto'
            />
          </div>
        </div>
      </div>

      <Step />

      <section className='dark:text-white w-full'>
        <div className='container flex flex-col justify-center px-4 py-8 mx-auto md:p-8'>
          <h2 className='text-4xl text-center lg:text-5xl font-extrabold text-white mb-6 md:!leading-[55px]'>
            Frequently Asked Questions
          </h2>
          <div className='mx-auto w-full md:w-1/2 py-8 mt-4'>
            <img
              src={faqSvg}
              alt='Frequently Asked Questions'
              className='w-11/12 mx-auto'
            />
          </div>
          <div className='container mx-auto px-6'>
            <div className='flex md:flex-row flex-col'>
              <div className='flex-1 text-left space-y-6 md:mt-0 mt-12 relative z-10'>
                <Disclosure as='div' className='border-b-2 pb-2 border-white'>
                  <Disclosure.Button className='py-2 w-full'>
                    <div className='flex justify-between items-center w-full'>
                      <div className='text-2xl text-left text-white 523A28]'>
                        What is QuickSwap?
                      </div>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-12 h-12'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      </div>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className='text-gray-300'>
                    <div className='py-2'>
                      <p>
                        QuickSwap is the first trading interface built on top of
                        Ice Protocol.
                      </p>
                      <p className='mt-4'>
                        QuickSwap is a Meta DEX aggregator that allows you to
                        buy and sell tokens using gasless orders that are
                        settled peer-to-peer among its users, or into any
                        on-chain liquidity source while providing MEV
                        protection.
                      </p>
                    </div>
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure as='div' className='border-b-2 pb-2 border-white'>
                  <Disclosure.Button className='py-2 w-full'>
                    <div className='flex justify-between items-center w-full'>
                      <div className='text-2xl text-left text-white 523A28]'>
                        What types of orders does QuickSwap support?
                      </div>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-12 h-12'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      </div>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className='text-gray-300'>
                    <div className='py-2'>
                      <p>
                        Swap buy and sell orders, which are always Fill or kill.
                      </p>
                      <p className='mt-4'>
                        Limit buy and sell orders, which can either be Partially
                        fillable or Fill or kill. By default, limit orders are
                        Partially fillable. QuickSwap is the first trading
                        interface built on top of Bear Protocol.
                      </p>
                    </div>
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure as='div' className='border-b-2 pb-2 border-white'>
                  <Disclosure.Button className='py-2 w-full'>
                    <div className='flex justify-between items-center w-full'>
                      <div className='text-2xl text-left text-white 523A28]'>
                        What token pairs does QuickSwap NOT allow you to trade?
                      </div>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-12 h-12'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      </div>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className='text-gray-300'>
                    <div className='py-2'>
                      <p>
                        Unfortunately, QuickSwap does not support some tokens.
                        While these tokens implement the typical ERC20
                        interface, when calling the transfer and transferFrom
                        methods, the actual amount the receiver will get will be
                        smaller than the specified sent amount. This causes
                        problems with QuickSwap's settlement logic which expects
                        the received amount (e.g., from a Uniswap interaction)
                        to be fully transferable to the trader.
                      </p>
                    </div>
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure as='div' className='border-b-2 pb-2 border-white'>
                  <Disclosure.Button className='py-2 w-full'>
                    <div className='flex justify-between items-center w-full'>
                      <div className='text-2xl text-left text-white 523A28]'>
                        Why is QuickSwap able to offer gasless trades?
                      </div>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-12 h-12'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      </div>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className='text-gray-300'>
                    <div className='py-2'>
                      <p>
                        QuickSwap is able to offer gasless trades because the
                        orders are submitted off-chain via signed messages. Once
                        you approve your funds for spending on the dapp, you can
                        submit orders via signed messages that contain the
                        trade’s details, such as limit price, amount, timestamp,
                        and so on.
                      </p>
                    </div>
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure as='div' className='border-b-2 pb-2 border-white'>
                  <Disclosure.Button className='py-2 w-full'>
                    <div className='flex justify-between items-center w-full'>
                      <div className='text-2xl text-left text-white 523A28]'>
                        Can I cancel an order?
                      </div>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-12 h-12'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      </div>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className='text-gray-300'>
                    <div className='py-2'>
                      <p>
                        Yes! You can request to cancel any order while it is
                        still pending.
                      </p>
                      <p className='mt-4'>
                        Cancellations, like orders, are free and require no gas
                        to be paid.
                      </p>
                      <p className='mt-4'>
                        Keep in mind that even though the request to cancel an
                        order succeeds, the order might still be executed.
                      </p>
                      <p className='mt-4'>
                        That is because when the offline order cancellation is
                        received, a settlement solution may have already been
                        prepared by one of the solvers and sent to the Ethereum
                        network.
                      </p>
                      <p className='mt-4'>
                        Alternatively, there is the so-called hard cancellation,
                        which allows to cancel an order on-chain. This is not
                        currently supported by the QuickSwap web interface, and
                        you would need to pay for the gas of the on-chain
                        cancellation. For more information, check the Smart
                        Contract implementation.
                      </p>
                    </div>
                  </Disclosure.Panel>
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const Step = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className='ft-slick__dots--custom'>
        <div className='loading' />
      </div>
    ),
  }

  return (
    <div className='px-4 py-16 mx-auto  w-full md:px-24 lg:px-8 lg:py-20 bg-white'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <div className='text-center'>
          <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
            Brand new
          </p>
        </div>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='f51618fb-0edb-4bcb-b35a-ffc770941286'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#f51618fb-0edb-4bcb-b35a-ffc770941286)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative text-gray-700'>How It Works</span>
          </span>{' '}
        </h2>
      </div>

      <SliderWrapper>
        <Slider {...settings} className='bg-light text-center'>
          <div className='relative text-center'>
            <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-black sm:w-20 sm:h-20'>
              <svg
                className='w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16'
                stroke='currentColor'
                viewBox='0 0 52 52'
              >
                <polygon
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fill='none'
                  points='29 13 14 29 25 29 23 39 38 23 27 23'
                />
              </svg>
            </div>
            <h6 className='mb-2 text-2xl font-extrabold text-gray-700'>
              Choose a currency pair
            </h6>
            <p className='max-w-md mb-3 text-sm text-gray-900 sm:mx-auto'>
              Select currencies you want to swap and click the Swap button.
            </p>
          </div>
          <div className='relative text-center'>
            <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-black sm:w-20 sm:h-20'>
              <svg
                className='w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16'
                stroke='currentColor'
                viewBox='0 0 52 52'
              >
                <polygon
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fill='none'
                  points='29 13 14 29 25 29 23 39 38 23 27 23'
                />
              </svg>
            </div>
            <h6 className='mb-2 text-2xl font-extrabold text-gray-700'>
              Enter the recipient’s address
            </h6>
            <p className='max-w-md mb-3 text-sm text-gray-900 sm:mx-auto'>
              The currency you want to receive will be sent to this address
              after the exchange.
            </p>
          </div>
          <div className='relative text-center'>
            <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-black sm:w-20 sm:h-20'>
              <svg
                className='w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16'
                stroke='currentColor'
                viewBox='0 0 52 52'
              >
                <polygon
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fill='none'
                  points='29 13 14 29 25 29 23 39 38 23 27 23'
                />
              </svg>
            </div>
            <h6 className='mb-2 text-2xl font-extrabold text-gray-700'>
              Send and recieve coins
            </h6>
            <p className='max-w-md mb-3 text-sm text-gray-900 sm:mx-auto'>
              To continue, send the indicated amount of coins to the deposit
              address.
            </p>
          </div>
        </Slider>
      </SliderWrapper>
    </div>
  )
}

export default Home
