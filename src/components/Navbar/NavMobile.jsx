import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import navList from './navList'
import { BsInbox, BsBookmark } from 'react-icons/bs'
import { FaLock, FaUser, FaUnlock } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { Nav } from 'react-bootstrap'
import NavItem from './NavItem'

const NavMobile = ({ show, handleClose, user }) => {

    return (
        <Modal id='nav-modal' className='d-lg-none' show={show} onHide={handleClose}>
            <Modal.Body className='pt-3'>
                <button onClick={handleClose} className='btn btn-v2 btn-cls py-2 fw-bold'>CLOSE</button>
                <div className="d-flex flex-column w-100">
                    <div className="h-100 py-3 py-md-0 border-bottom">
                        <Nav className='d-flex flex-column justify-content-end h-100'>
                            {navList && navList.map((item, index) => <NavItem handleClose={handleClose} key={item.title + index} item={item} />)}</Nav>
                    </div>
                    <div style={{ fontSize: '0.675rem', letterSpacing: '0.075em', gap: '5px' }} className="py-3 py-md-0 h-100 w-100 d-flex flex-column justify-content-between justify-content-md-end px-md-5">
                        <Link onClick={handleClose} className="text-light px-3 d-flex flex-row" to='/news'><BsInbox style={{ fontSize: '15px' }} className='align-top text-mustard me-2' /><span>NEWS</span></Link>
                        <Link onClick={handleClose} className="text-light px-3 d-flex flex-row" to='/contact-us'><FiMail style={{ fontSize: '15px' }} className='align-top text-mustard me-2' /><span>CONTACT US</span></Link>
                        {!user && <Link onClick={handleClose} className="text-light px-3 d-flex flex-row" to='/login'><FaLock style={{ fontSize: '15px' }} className='align-top text-mustard me-2' /><span>LOGIN</span></Link>}
                        {user && <Link onClick={handleClose} className="text-light px-3 d-flex flex-row" to='/admin'><FaUser style={{ fontSize: '15px' }} className='align-top text-mustard me-2' /><span>ADMIN</span></Link>}
                        {user && <Link onClick={handleClose} className="text-light px-3 d-flex flex-row" to='/logout'><FaUnlock style={{ fontSize: '15px' }} className='align-top text-mustard me-2' /><span>LOGOUT</span></Link>}
                    </div>
                    <Link onClick={handleClose} className="btn-v2 px-3 fw-bold px-4 py-2" to='/inquire'><span className='text-center w-100'><BsBookmark style={{ fontSize: '15px' }} className='align-top me-2' />INQUIRE</span></Link>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default NavMobile