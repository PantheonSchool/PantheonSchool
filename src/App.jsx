import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import { ToastContainer } from "react-toastify"
import { ClipLoad } from "./components/Fallback"

const Navbar = lazy(() => import('./components/Navbar/Navbar'))
const Home = lazy(() => import('./components/Home/Home'))
const Inquire = lazy(() => import('./components/Inquire'))
const Page404 = lazy(() => import('./components/Page404'))
const Login = lazy(() => import('./components/Login/Login'))
const Logout = lazy(() => import('./components/Login/Logout'))
const Register = lazy(() => import('./components/Login/Register'))
const Visit = lazy(() => import('./components/Visit/Visit'))
const News = lazy(() => import('./components/News/News'))
const Apply = lazy(() => import('./components/Apply/Apply'))
const FeeStructure = lazy(() => import('./components/Apply/FeeStructure'))
const About = lazy(() => import('./components/About/About'))
const DirectorMessage = lazy(() => import('./components/About/DirectorMessage'))
const ChairmanMessage = lazy(() => import('./components/About/ChairmanMessage'))
const PrincipalMessage = lazy(() => import('./components/About/PrincipalMessage'))
const BookList = lazy(() => import('./components/BookList/BookList'))
const ContactUs = lazy(() => import('./components/ContactUs'))

const PrivateRoute = lazy(() => import('./components/PrivateRoute'))
const PublicRoute = lazy(() => import('./components/PublicRoute'))

const Admin = lazy(() => import('./components/Admin/Admin'))
const AdminNews = lazy(() => import('./components/Admin/News/News'))
const AdminInquire = lazy(() => import('./components/Admin/Inquire'))

const App = () => {
  return (
    <>
      <Suspense fallback={<></>}><Navbar /></Suspense>
      <div style={{ minHeight: '50vh' }} className='mb-1'>
        <Suspense fallback={<ClipLoad />} >
          <Routes>
            <Route>
              <Route path='/' element={<Home />} />
              <Route path="/inquire" element={<Inquire />} />
              <Route path='/apply' element={<Apply />} />
              <Route path='/fee-structure' element={<FeeStructure />} />
              <Route path='/pantheon-at-a-glance' element={<About />} />
              <Route path='/director-message' element={<DirectorMessage />} />
              <Route path='/chairman-message' element={<ChairmanMessage />} />
              <Route path='/principal-message' element={<PrincipalMessage />} />
              <Route path='/book-list' element={<BookList />} />

              <Route element={<PrivateRoute />}>
                <Route path='/admin/register' element={<Register />} />
                <Route path='/admin/news' element={<AdminNews />} />
                <Route path='/admin/inquire' element={<AdminInquire />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/admin' element={<Admin />} />
              </Route>

              <Route element={<PublicRoute restricted={true} />}>
                <Route path='/login' element={<Login />} />
              </Route>

              <Route element={<PublicRoute restricted={false} />}>
                <Route path='/visit' element={<Visit />} />
                <Route path='/news' element={<News />} />
                <Route path='contact-us' element={<ContactUs />} />
              </Route>

              <Route path='*' element={<Page404 />} />
            </Route>

          </Routes>
        </Suspense>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Footer />
    </>
  )
}

export default App