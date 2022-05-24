import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
const Navbar = lazy(() => import('./components/Navbar/Navbar'))
const Home = lazy(() => import('./components/Home/Home'))
const Inquire = lazy(() => import('./components/Inquire'))
const Page404 = lazy(() => import('./components/Page404'))

const App = () => {
  return (
    <>
      <Suspense fallback={<>Loading...</>}><Navbar /></Suspense>
      <div style={{minHeight:'50vh'}} className='mb-1'>
        <Suspense fallback={<>Loading ...</>} >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/inquire" element={<Inquire />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  )
}

export default App