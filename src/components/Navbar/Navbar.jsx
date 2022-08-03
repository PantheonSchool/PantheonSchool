import { Navbar as NavbarContainer, Nav, Container, Dropdown } from "react-bootstrap"
import { BsInbox, BsTelephone, BsFillTelephoneFill, BsBookmark } from 'react-icons/bs'
import { FaLock, FaUnlock, FaUser } from 'react-icons/fa'
import './navbar.css'
import PantheonLogo from '../Images/PantheonLogo1.png'
import { Link } from "react-router-dom"
import navList from "./navList"
import { CgMenuRight } from 'react-icons/cg'
import { useRef, useState, useContext, useEffect } from "react"
import { AuthContext } from "../../utils/ContextAPI/AuthContext"
import NavMobile from "./NavMobile"



const Navbar = () => {
    const navbar = useRef()
    let last_scroll_top = 0;
    const [bgColor, setBgColor] = useState('none')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { user, setNavHeight,navHeight } = useContext(AuthContext)

    useEffect(() => {
        if (navbar.current) {
            setNavHeight(navbar.current.offsetHeight > 107 ? navbar.current.offsetHeight : navHeight)
        }
    }, [navbar.current])

    // function getRandomColor() {
    //     const random = `hsla(${Math.random() * 360},70%,40%,0.9)`
    //     return random
    // }


    const NavItem = ({ item }) => {
        return <>
            {item.hasList ? <Dropdown onMouseEnter={() => window.screen.width > 960 && setBgColor(item.bgColor)} onMouseLeave={() => window.screen.width > 960 && setBgColor('transparent')} className='h-100'>
                <Dropdown.Toggle className='text-center bg-transparent fw-bold h-100 text-white px-3 '>
                    {item.title}
                </Dropdown.Toggle>
                <Dropdown.Menu className='py-0 my-0 border-top' style={{ backgroundColor: bgColor }} renderOnMount={true}>
                    {item.list && item.list.map((it, index) => <Link key={it.title + index} className='dropdown-item text-light' to={it.link || '/'}>{it.title}</Link>)}
                </Dropdown.Menu>
            </Dropdown> :
                <Link className='fw-bold px-3 text-light nav-link' to={item.link || '/'}>{item.title}</Link>}
        </>
    }

    window.addEventListener('scroll', () => {
        if (navbar.current) {
            // navbar.current.classList.toggle("scrolled", window.scrollY > 0);
            let scroll_top = window.scrollY;
            if (scroll_top < last_scroll_top) {
                navbar.current.classList.remove('scrolled-down');
                navbar.current.classList.add('scrolled-up')
            }
            else {
                navbar.current.classList.remove('scrolled-up');
                navbar.current.classList.add('scrolled-down')
            }
            last_scroll_top = scroll_top
        }
    })

    return (<><NavbarContainer ref={navbar} variant='dark' className='p-0 text-white sticky-top col-12' expand="lg">
        <NavMobile show={show} handleClose={handleClose} user={user} />
        <Container className='p-0 mw-100 border-bottom'>
            <Link to='/' className="d-flex d-lg-none font-arvo flex-row align-items-center justify-content-center ps-2 py-2">
                <img src={PantheonLogo} alt='' className="img-fluid" style={{ width: '230px' }} />
                {/* <div style={{ letterSpacing: '2.5px' }} className="text-uppercase text-light ms-3 mt-4">
                    <p className='small fw-bold mb-0'>The Pantheon</p>
                    <p className="mb-0 small fw-light">School,Haldwani</p>
                </div> */}
            </Link>
            <NavbarContainer.Toggle onClick={handleShow} aria-controls="basic-navbar-nav" ><CgMenuRight className="fs-1 me-2" /></NavbarContainer.Toggle>
            <NavbarContainer.Collapse id="basic-navbar-nav" className="w-100 d-none d-ld-block">
                <div className='d-flex mx-0 w-100'>
                    <Link to='/' className="d-none col-3 font-arvo py-3 d-lg-flex flex-row align-items-center justify-content-center border-end border-bottom">
                        <img src={PantheonLogo} alt='' className="img-fluid" style={{ width: '260px' }} />
                        {/* <div style={{ letterSpacing: '2.5px' }} className="text-uppercase text-light ms-3 mt-4">
                            <p className='fs-5 fw-bold mb-0'>The Pantheon</p>
                            <p className="mb-0 fw-light">School,Haldwani</p>
                        </div> */}
                    </Link>
                    <div className="d-flex flex-column w-100">
                        <div style={{ fontSize: '11px' }} className="border-bottom py-3 py-md-0 h-100 w-100 d-flex align-items-center justify-content-between justify-content-md-end px-md-5">
                            <Link className="text-light px-3 d-flex flex-row" to='/news'><BsInbox style={{ fontSize: '15px' }} className='align-top text-mustard me-2' /><span className='d-none d-md-block'>NEWS</span></Link>
                            <Link className="text-light px-3 d-flex flex-row" to='/contact-us'><BsTelephone style={{ fontSize: '15px' }} className='align-top text-mustard me-2' /><span className='d-none d-md-block'>CONTACT US</span></Link>
                            {!user && <Link className="text-light px-3 d-flex flex-row" to='/login'><FaLock style={{ fontSize: '15px' }} className='align-top text-mustard me-2' /><span className='d-none d-md-block'>LOGIN</span></Link>}
                            {user && <Link className="text-light px-3 d-flex flex-row" to='/admin'><FaUser style={{ fontSize: '15px' }} className='align-top text-mustard me-2' /><span className='d-none d-md-block'>ADMIN</span></Link>}
                            {user && <Link className="text-light px-3 d-flex flex-row" to='/logout'><FaUnlock style={{ fontSize: '15px' }} className='align-top text-mustard me-2' /><span className='d-none d-md-block'>LOGOUT</span></Link>}
                            <Link className="btn-v2 px-3 fw-bold px-4 py-2" to='/inquire'><BsBookmark style={{ fontSize: '15px' }} className='align-top me-2' />INQUIRE</Link>
                            <a className='px-3' href='tel:7618671071'><BsFillTelephoneFill style={{ fontSize: '15px' }} className='align-top text-mustard me-2' /></a>
                        </div>
                        <div style={{ backgroundColor: bgColor }} className="h-100 py-3 py-md-0 border-bottom bottom-nav px-md-5">
                            <Nav className='d-flex flex-md-row justify-content-end h-100 align-items-center'>
                                {navList && navList.map((item, index) => <NavItem key={item.title + index} item={item} />)}</Nav>
                        </div>
                    </div>
                </div>
            </NavbarContainer.Collapse>
        </Container>
    </NavbarContainer></>)
}

export default Navbar