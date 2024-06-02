import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderWrapper from './_SlickSliderStyle'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import about from '../assets/about.svg'
import wallet from '../assets/wallet.png'

function Home() {
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
    <>
      {/* <!-- Header Start --> */}
      <div className='container-fluid hero-header bg-light py-5 mb-5'>
        <div className='container py-5'>
          <div className='row g-5 align-items-center'>
            <div className='col-lg-6'>
              <h1 className='display-4 mb-3 animated slideInDown'>
                Make Better Life With Trusted CryptoCoin
              </h1>
              <p className='animated slideInDown'>
                DexSwap finds the lowest price for your trade across all
                exchanges and aggregators, such as Uniswap and 1inch - and
                protects you from MEV, unlike the others.
              </p>
              <Link
                to='/swap'
                className='btn btn-primary py-3 px-4 animated slideInDown'
              >
                Start Trading
              </Link>
            </div>
            <div className='col-lg-6 animated fadeIn'>
              <img
                className='img-fluid animated pulse infinite'
                style={{ animationDuration: '3s' }}
                src={wallet}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}

      {/* <!-- About Start --> */}
      <div className='container-xxl py-5'>
        <div className='container'>
          <div className='row g-5 align-items-center'>
            <div className='col-lg-6 wow fadeInUp' data-wow-delay='0.1s'>
              <img className='img-fluid' src={about} alt='' />
            </div>
            <div className='col-lg-6 wow fadeInUp' data-wow-delay='0.5s'>
              <div className='h-100'>
                <h1 className='display-6'>About Us</h1>
                <p className='text-primary fs-5 mb-4'>
                  The Most Trusted Cryptocurrency Platform
                </p>
                <p>
                  Customers have long appreciated the convenience of the
                  fiat-to-crypto exchanges. But it is something new to the
                  affiliate partners of DexSwap. From now on, the API is
                  accessible not only for cryptocurrency but also for fiat
                  swaps!
                </p>
                {/* <p className='mb-4'>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p> */}
                <div className='d-flex align-items-center mb-2'>
                  <i className='fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold'></i>
                  <span>DexSwap is an easy-to-use, safe crypto exchange.</span>
                </div>
                <div className='d-flex align-items-center mb-2'>
                  <i className='fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold'></i>
                  <span>It allows you to make quick crypto swaps.</span>
                </div>
                <div className='d-flex align-items-center mb-4'>
                  <i className='fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold'></i>
                  <span>
                    Platform offers different convenient tools in order to make
                    your crypto life simple.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Facts Start --> */}
      <div className='container-xxl bg-light py-5 my-5'>
        <div className='container py-5'>
          <div className='row g-5'>
            <div
              className='col-lg-4 col-md-6 text-center wow fadeIn'
              data-wow-delay='0.1s'
            >
              <img className='img-fluid mb-4' src='/img/icon-9.png' alt='' />
              <h1 className='display-4' data-toggle='counter-up'>
                20
              </h1>
              <p className='fs-5 text-primary mb-0'>Today Transactions</p>
            </div>
            <div
              className='col-lg-4 col-md-6 text-center wow fadeIn'
              data-wow-delay='0.3s'
            >
              <img className='img-fluid mb-4' src='/img/icon-10.png' alt='' />
              <h1 className='display-4' data-toggle='counter-up'>
                500
              </h1>
              <p className='fs-5 text-primary mb-0'>Monthly Transactions</p>
            </div>
            <div
              className='col-lg-4 col-md-6 text-center wow fadeIn'
              data-wow-delay='0.5s'
            >
              <img className='img-fluid mb-4' src='/img/icon-2.png' alt='' />
              <h1 className='display-4' data-toggle='counter-up'>
                1000
              </h1>
              <p className='fs-5 text-primary mb-0'>Total Transactions</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Facts End --> */}

      {/* <!-- Features Start --> */}
      <div className='container-xxl py-5'>
        <div className='container'>
          <div
            className='text-center mx-auto wow fadeInUp'
            data-wow-delay='0.1s'
            style={{ maxWidth: '500px' }}
          >
            <h1 className='display-6'>Why Us!</h1>
            <p className='text-primary fs-5 mb-5'>
              The Best In The crypto Industry
            </p>
          </div>
          <div className='row g-5'>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-delay='0.1s'
            >
              <div className='d-flex align-items-start'>
                <img
                  className='img-fluid flex-shrink-0'
                  src='/img/icon-7.png'
                  alt=''
                />
                <div className='ps-4'>
                  <h5 className='mb-3'>Sign-up is not required</h5>
                  <span>
                    DexSwap provides cryptocurrency exchange without
                    registration.
                  </span>
                </div>
              </div>
            </div>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-delay='0.3s'
            >
              <div className='d-flex align-items-start'>
                <img
                  className='img-fluid flex-shrink-0'
                  src='/img/icon-6.png'
                  alt=''
                />
                <div className='ps-4'>
                  <h5 className='mb-3'>1000 cryptocurrencies</h5>
                  <span>
                    Hundreds of crypto and fiat currencies are available for
                    exchange.
                  </span>
                </div>
              </div>
            </div>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-delay='0.5s'
            >
              <div className='d-flex align-items-start'>
                <img
                  className='img-fluid flex-shrink-0'
                  src='/img/icon-5.png'
                  alt=''
                />
                <div className='ps-4'>
                  <h5 className='mb-3'>You won't be left alone</h5>
                  <span>
                    Our support team is easy to reach and ready to answer your
                    questions.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Features End --> */}

      {/* <!-- Roadmap Start --> */}
      <div className='container-xxl bg-light py-5'>
        <div className='container'>
          <div
            className='text-center mx-auto wow fadeInUp'
            data-wow-delay='0.1s'
            style={{ maxWidth: '500px' }}
          >
            <h1 className='display-6'>Roadmap</h1>
            <p className='text-primary fs-5 mb-5'>
              We Translate Your Dream Into Reality
            </p>
          </div>

          <SliderWrapper>
            <Slider {...settings} className='bg-light text-center'>
              <div
                className='col-lg-4 col-md-6 wow fadeInUp'
                data-wow-delay='0.1s'
              >
                <div className='service-item'>
                  <img
                    className='img-fluid mb-4'
                    src='/img/icon-7.png'
                    alt=''
                    style={{ margin: 'auto' }}
                  />
                  <h5 className='mb-3'>Step 1: Choose a currency pair</h5>
                  <p>
                    Select currencies you want to swap and click the Exchange
                    button.
                  </p>
                </div>
              </div>
              <div
                className='col-lg-4 col-md-6 wow fadeInUp'
                data-wow-delay='0.3s'
              >
                <div className='service-item'>
                  <img
                    className='img-fluid mb-4'
                    src='/img/icon-3.png'
                    alt=''
                    style={{ margin: 'auto' }}
                  />
                  <h5 className='mb-3'>
                    Step 2: Enter the recipient’s address
                  </h5>
                  <p>
                    The currency you want to receive will be sent to this
                    address after the exchange.
                  </p>
                </div>
              </div>
              <div
                className='col-lg-4 col-md-6 wow fadeInUp'
                data-wow-delay='0.5s'
              >
                <div className='service-item'>
                  <img
                    className='img-fluid mb-4'
                    src='/img/icon-8.png'
                    alt=''
                    style={{ margin: 'auto' }}
                  />
                  <h5 className='mb-3'>Step 3: Send and recieve coins</h5>
                  <p>
                    To continue, send the indicated amount of coins to the
                    deposit address.
                  </p>
                </div>
              </div>
              <div
                className='col-lg-4 col-md-6 wow fadeInUp'
                data-wow-delay='0.1s'
              >
                <div className='service-item'>
                  <img
                    className='img-fluid mb-4'
                    src='/img/icon-5.png'
                    alt=''
                    style={{ margin: 'auto' }}
                  />
                  <h5 className='mb-3'>Step 4: That's all</h5>
                  <p>
                    The exchange status “Finished” means that the swap process
                    is over
                  </p>
                </div>
              </div>
            </Slider>
          </SliderWrapper>
        </div>
      </div>
      {/* <!-- Roadmap End --> */}

      {/* <!-- FAQs Start --> */}
      <div className='container-xxl py-5'>
        <div className='container'>
          <div
            className='text-center mx-auto wow fadeInUp'
            data-wow-delay='0.1s'
            style={{ maxWidth: '500px' }}
          >
            <h1 className='display-6'>FAQs</h1>
            <p className='text-primary fs-5 mb-5'>Frequently Asked Questions</p>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className='accordion' id='accordionExample'>
                <div
                  className='accordion-item wow fadeInUp'
                  data-wow-delay='0.1s'
                >
                  <h2 className='accordion-header' id='headingOne'>
                    <button
                      className='accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      What is DexSwap?
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      DexSwap is the first trading interface built on top of Ice
                      Protocol. DexSwap is a Meta DEX aggregator that allows you
                      to buy and sell tokens using gasless orders that are
                      settled peer-to-peer among its users, or into any on-chain
                      liquidity source while providing MEV protection.
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item wow fadeInUp'
                  data-wow-delay='0.2s'
                >
                  <h2 className='accordion-header' id='headingTwo'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      What types of orders does DexSwap support?
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingTwo'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      Swap buy and sell orders, which are always Fill or kill.
                      Limit buy and sell orders, which can either be Partially
                      fillable or Fill or kill. By default, limit orders are
                      Partially fillable. DiceSwap is the first trading
                      interface built on top of Bear Protocol.
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item wow fadeInUp'
                  data-wow-delay='0.3s'
                >
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      What token pairs does DexSwap NOT allow you to trade?
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingThree'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      Unfortunately, DexSwap does not support some tokens. While
                      these tokens implement the typical ERC20 interface, when
                      calling the transfer and transferFrom methods, the actual
                      amount the receiver will get will be smaller than the
                      specified sent amount. This causes problems with
                      DiceSwap's settlement logic which expects the received
                      amount (e.g., from a Uniswap interaction) to be fully
                      transferable to the trader.
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item wow fadeInUp'
                  data-wow-delay='0.4s'
                >
                  <h2 className='accordion-header' id='headingFour'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFour'
                      aria-expanded='true'
                      aria-controls='collapseFour'
                    >
                      Why is DiceSwap able to offer gasless trades?
                    </button>
                  </h2>
                  <div
                    id='collapseFour'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingFour'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      DexSwap is able to offer gasless trades because the orders
                      are submitted off-chain via signed messages. Once you
                      approve your funds for spending on the dapp, you can
                      submit orders via signed messages that contain the trade’s
                      details, such as limit price, amount, timestamp, and so
                      on.
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item wow fadeInUp'
                  data-wow-delay='0.5s'
                >
                  <h2 className='accordion-header' id='headingFive'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFive'
                      aria-expanded='false'
                      aria-controls='collapseFive'
                    >
                      Can I cancel an order?
                    </button>
                  </h2>
                  <div
                    id='collapseFive'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingFive'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      Yes! You can request to cancel any order while it is still
                      pending. Cancellations, like orders, are free and require
                      no gas to be paid. Keep in mind that even though the
                      request to cancel an order succeeds, the order might still
                      be executed. That is because when the offline order
                      cancellation is received, a settlement solution may have
                      already been prepared by one of the solvers and sent to
                      the Ethereum network. Alternatively, there is the
                      so-called hard cancellation, which allows to cancel an
                      order on-chain. This is not currently supported by the
                      DiceSwap web interface, and you would need to pay for the
                      gas of the on-chain cancellation. For more information,
                      check the Smart Contract implementation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* <!-- FAQs Start --> */}
    </>
  )
}

export default Home
