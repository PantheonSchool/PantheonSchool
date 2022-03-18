import { Navbar as NavbarContainer, Nav, Container, Dropdown } from "react-bootstrap"
import { BsInbox, BsTelephone, BsFillTelephoneFill } from 'react-icons/bs'
import './navbar.css'
import PantheonLogo from '../Images/PantheonLogo.png'
import { Link } from "react-router-dom"

const Navbar = () => {

    window.addEventListener("scroll", () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("scrolled", window.scrollY > 0);
    })

    return (<><NavbarContainer variant='dark' className='p-0 text-white sticky-top col-12' expand="md">
        <Container className='mx-2 mx-md-0 p-0 mw-100'>
            <Link to='/' className="d-flex d-md-none font-arvo flex-row align-items-center justify-content-center py-2">
                <img src={PantheonLogo} alt='' className="img-fluid" style={{ width: '80px' }} />
                <div style={{ letterSpacing: '2.5px' }} className="text-uppercase text-light ms-3 mt-4">
                    <p className='fs-5 fw-bold mb-0'>The Pantheon</p>
                    <p className="mb-0 fw-light">School</p>
                </div>
            </Link>
            <NavbarContainer.Toggle aria-controls="basic-navbar-nav" />
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
                        <div style={{ fontSize: '11px' }} className="border-bottom py-3 py-md-0 h-100 w-100 d-flex align-items-center justify-content-end px-5">
                            <Link className="text-light px-3" to='/news'><BsInbox style={{ fontSize: '15px' }} className='align-top text-mustard me-2' />NEWS</Link>
                            <Link className="text-light px-3" to='/contact-us'><BsTelephone style={{ fontSize: '15px' }} className='align-top text-mustard me-2' />CONTACT US</Link>
                            <a className='px-3' href='tel:7618671071'><BsFillTelephoneFill style={{ fontSize: '15px' }} className='align-top text-mustard me-2'/></a>
                        </div>
                        <div className="h-100 py-3 py-md-0 border-bottom">

                        </div>
                    </div>
                </div>
            </NavbarContainer.Collapse>
        </Container>
    </NavbarContainer></>)
}

export default Navbar