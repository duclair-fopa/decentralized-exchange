import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SharedLayout from './components/SharedLayout'
import SwapComponent from './components/Swap/SwapComponent'
import ErrorPage from './components/ErrorPage/ErrorPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='swap' element={<SwapComponent />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
