import { useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'

const Confetti = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const detectSize = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimensions])

  return (
    <ReactConfetti
      width={windowDimensions.width}
      height={windowDimensions.height}
    />
  )
}
export default Confetti
