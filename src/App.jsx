import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
const Navbar = lazy(() => import('./components/Navbar/Navbar'))
const Home = lazy(() => import('./components/Home/Home'))

const Page404 = lazy(() => import('./components/Page404'))

const App = () => {
  return (
    <>
      <div className='w-100' style={{ minHeight: '100vh' }}>
        <Suspense fallback={<>Loading...</>}><Navbar /></Suspense>
        <Suspense fallback={<>Loading ...</>} >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  )
}

export default App