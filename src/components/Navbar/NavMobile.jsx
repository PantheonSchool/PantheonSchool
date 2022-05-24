import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import navList from './navList'
import { BsInbox, BsTelephone, BsFillTelephoneFill, BsBookmark } from 'react-icons/bs'
import { FaLock } from 'react-icons/fa'
import { Nav } from 'react-bootstrap'
import NavItem from './NavItem'

const NavMobile = ({ show, handleClose }) => {

    return (
        <Modal id='nav-modal' show={show} onHide={handleClose}>
            <Modal.Body className='pt-3'>
                <button onClick={handleClose} className='btn btn-v2 btn-cls py-2 fw-bold'>CLOSE</button>
                <div className="d-flex flex-column w-100">
                    <div className="h-100 py-3 py-md-0 border-bottom">
                        <Nav className='d-flex flex-md-row justify-content-end h-100'>
                            {navList && navList.map((item, index) => <NavItem handleClose={handleClose} key={item.title + index} item={item} />)}</Nav>
                    </div>
                    <div style={{ fontSize: '0.675rem', letterSpacing: '0.075em' }} className="py-3 py-md-0 h-100 w-100 d-flex flex-column justify-content-between justify-content-md-end px-md-5">
                        <Link onClick={handleClose} className="text-light px-3 d-flex flex-row py-2" to='/news'><BsInbox style={{ fontSize: '15px' }} className='align-top text-mustard me-2' /><span>NEWS</span></Link>
                        <Link onClick={handleClose} className="text-light px-3 d-flex flex-row py-2" to='/contact-us'><BsTelephone style={{ fontSize: '15px' }} className='align-top text-mustard me-2' /><span>CONTACT US</span></Link>
                        <Link onClick={handleClose} className="text-light px-3 d-flex flex-row py-2" to='/login'><FaLock style={{ fontSize: '15px' }} className='align-top text-mustard me-2' /><span>LOGIN</span></Link>
                    </div>
                    <Link onClick={handleClose} className="btn-v2 px-3 fw-bold px-4 py-2" to='/inquire'><span className='text-center w-100'><BsBookmark style={{ fontSize: '15px' }} className='align-top me-2' />INQUIRE</span></Link>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default NavMobile