import { Navbar as NavbarContainer, Nav, Container, Dropdown } from "react-bootstrap"
import { BsInbox, BsTelephone, BsFillTelephoneFill, BsBookmark } from 'react-icons/bs'
import { FaLock } from 'react-icons/fa'
import './navbar.css'
import PantheonLogo from '../Images/PantheonLogo.png'
import { Link } from "react-router-dom"
import navList from "./navList"


const NavItem = ({ item }) => {
    return <>
        {item.hasList ? <Dropdown>
            <Dropdown.Toggle className='text-center bg-transparent fw-bold text-white px-3 '>
                {item.title}
            </Dropdown.Toggle>
            <Dropdown.Menu renderOnMount={true}>
                {item.list && item.list.map((it, index) => <Link key={it.title + index} className='dropdown-item text-light' to={it.link || '/'}>{it.title}</Link>)}
            </Dropdown.Menu>
        </Dropdown> :
            <Link className='fw-bold px-3 text-light nav-link' to={item.link || '/'}>{item.title}</Link>}
    </>
}

const Navbar = () => {

    window.addEventListener("scroll", () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("scrolled", window.scrollY > 0);
    })

    return (<><NavbarContainer variant='dark' className='p-0 text-white sticky-top col-12' expand="md">
        <Container className='mx-md-2 p-0 mw-100'>
            <Link to='/' className="d-flex d-md-none font-arvo flex-row align-items-center justify-content-center ps-2 py-2">
                <img src={PantheonLogo} alt='' className="img-fluid" style={{ width: '80px' }} />
                <div style={{ letterSpacing: '2.5px' }} className="text-uppercase text-light ms-3 mt-4">
                    <p className='fs-5 fw-bold mb-0'>The Pantheon</p>
                    <p className="mb-0 fw-light">School</p>
                </div>
            </Link>
            <NavbarContainer.Toggle aria-controls="basic-navbar-nav" className='me-2' />
            <NavbarContainer.Collapse id="basic-navbar-nav" className="w-100">
                <div className='d-flex mx-0 w-100'>
                    <Link to='/' className="d-none col-3 font-arvo d-md-flex flex-row align-items-center justify-content-center border-end border-bottom py-2">
                        <img src={PantheonLogo} alt='' className="img-fluid" style={{ width: '80px' }} />
                        <div style={{ letterSpacing: '2.5px' }} className="text-uppercase text-light ms-3 mt-4">
                            <p className='fs-5 fw-bold mb-0'>The Pantheon</p>
                            <p className="mb-0 fw-light">School</p>
                        </div>
                    </Link>
                    <div className="d-flex flex-column w-100">
                        <div style={{ fontSize: '11px' }} className="border-bottom py-3 py-md-0 h-100 w-100 d-flex align-items-center justify-content-between justify-content-md-end px-md-5">
                            <Link className="text-light px-3 d-flex flex-row" to='/news'><BsInbox style={{ fontSize: '15px' }} className='align-top text-mustard me-2' /><span className='d-none d-md-block'>NEWS</span></Link>
                            <Link className="text-light px-3 d-flex flex-row" to='/contact-us'><BsTelephone style={{ fontSize: '15px' }} className='align-top text-mustard me-2' /><span className='d-none d-md-block'>CONTACT US</span></Link>
                            <Link className="text-light px-3 d-flex flex-row" to='/login'><FaLock style={{ fontSize: '15px' }} className='align-top text-mustard me-2' /><span className='d-none d-md-block'>LOGIN</span></Link>
                            <Link className="btn-v2 px-3 fw-bold" to='/login'><BsBookmark style={{ fontSize: '15px' }} className='align-top me-2' />INQUIRE</Link>
                            <a className='px-3' href='tel:7618671071'><BsFillTelephoneFill style={{ fontSize: '15px' }} className='align-top text-mustard me-2' /></a>
                        </div>
                        <div className="h-100 py-3 py-md-0 border-bottom bottom-nav px-md-5">
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