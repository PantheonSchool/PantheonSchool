import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
const Navbar = lazy(() => import('./components/Navbar/Navbar'))
const Home = lazy(() => import('./components/Home/Home'))

const App = () => {
  return (
    <>
      <div className='w-100 h-100'>
        <Suspense fallback={<>Loading...</>}><Navbar /></Suspense>
        <Suspense fallback={<>Loading ...</>} >
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  )
}

export default App