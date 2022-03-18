import PantheonLogo from '../Images/PantheonLogo.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className='bg-black px-4 mx-0 py-5 text-light'>
            <div className='container-fluid'>
                <div className='d-flex flex-column flex-md-row justify-content-between align-items-md-center'>
                    <div className="d-flex justify-content-center">
                        <img src={PantheonLogo} alt='' className="img-fluid" style={{ width: '120px', height: '150px' }} />
                        <div style={{ letterSpacing: '2.5px' }} className="text-uppercase text-light ms-3 d-flex flex-column justify-content-end">
                            <p className='fs-5 fw-bold mb-0'>The Pantheon</p>
                            <p className="mb-0 fw-light">School</p>
                            <div className='mt-4 d-flex justify-content-between'>
                                <a href='/' target='_blank'><FaFacebookF className='text-light' /></a>
                                <a href='/' target='_blank'><FaTwitter className='text-light' /></a>
                                <a href='/' target='_blank'><FaInstagram className='text-light' /></a>
                                <a href='/' target='_blank'><FaYoutube className='text-light' /></a>
                            </div>
                        </div>
                    </div>
                    <div style={{ letterSpacing: '1.6px' }} className='text-uppercase p-2'>
                        <p className='mb-2 fw-bold'>The pantheon school</p>
                        <p className='mb-1 small'>Haidakhan Mandir Road</p>
                        <p className='small'>Kathgharia,Haldwani</p>
                        <a className='text-light' href='tel:7618671071'> Mob. 7618671071, 7618671075</a>
                    </div>
                    <div style={{ letterSpacing: '1px' }} className='text-uppercase fw-bold d-flex flex-column p-2'>
                        <Link to='/' className='text-light mb-4'>Giving</Link>
                        <Link to='/' className='text-light mb-4'>The Pantheon way</Link>
                        <Link to='/' className='text-light mb-4'>apply</Link>
                    </div>
                    <div style={{ letterSpacing: '1.6px' }} className='text-uppercase fw-bold  d-flex flex-column p-2'>
                        <Link to='/' className='text-light mb-4'>site map</Link>
                        <Link to='/' className='text-light mb-4'>Tution</Link>
                        <Link to='/' className='text-light mb-4'>contact us</Link>
                    </div>
                    <div>
                        <iframe className='rounded-3 w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.6148657887325!2d79.47888661490823!3d29.23488088218401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09b24e09b03dd%3A0xb24beeedfc0d5a68!2sThe%20Pantheon%20School%2C%20Haldwani!5e0!3m2!1sen!2sin!4v1647584884756!5m2!1sen!2sin" height="200" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer