//import PantheonLogo from '../Images/PantheonLogo.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GoLocation } from 'react-icons/go'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import './footer.css'

{/* <div>
<iframe className='rounded-3 w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.6148657887325!2d79.47888661490823!3d29.23488088218401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09b24e09b03dd%3A0xb24beeedfc0d5a68!2sThe%20Pantheon%20School%2C%20Haldwani!5e0!3m2!1sen!2sin!4v1647584884756!5m2!1sen!2sin" height="200" allowFullScreen="" loading="lazy"></iframe>
</div> */}

const footerList_1 = [
    {
        title: 'About Us',
        link: '/about-us'
    },
    {
        title: 'News',
        link: '/news'
    },
    {
        title: 'Media Release',
        link: '/media-release'
    },
    {
        title: 'Gallery',
        link: 'gallery'
    },
    {
        title: 'Contact Us',
        link: '/contact-us'
    }
]

const footerList_2 = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'About Us',
        link: '/about-us'
    },
    {
        title: 'Blog',
        link: '/blog'
    },
    {
        title: 'Career',
        link: '/career'
    },
    {
        title: 'Contact Us',
        link: '/contact-us'
    }
]

const Footer = () => {
    return (
        <footer className='text-white bg-dark'>
            <div className='py-5 container d-flex flex-column justify-content-between flex-md-row' style={{ gap: '1.5rem' }}>
                <div>
                    <p className='fw-bold footer-title'>SOCIAL LINKS</p>
                    <div className='d-flex flex-row footer-icons'>
                        <Link to='/'><FaFacebookF /></Link>
                        <Link to='/'><FaTwitter /></Link>
                        <Link to='/'><FaLinkedinIn /></Link>
                        <Link to='/'><FaInstagram /></Link>
                        <Link to='/'><FaYoutube /></Link>
                    </div>
                </div>
                <div>
                    <p className='fw-bold footer-title'>Get to Know Us</p>
                    <div className='d-flex flex-column footer-items'>
                        {footerList_1 && footerList_1.map((item, index) => <Link className='text-white small' key={item.title + index} to={item.link}>{item.title}</Link>)}
                    </div>
                </div>
                <div>
                    <p className='fw-bold footer-title'>Quick Links</p>
                    <div className='d-flex flex-column footer-items'>
                        {footerList_2 && footerList_2.map((item, index) => <Link className='text-white small' key={item.title + index} to={item.link}>{item.title}</Link>)}
                    </div>
                </div>
                <div>
                    <p className='fw-bold footer-title'>Contact Info</p>
                    <div className='footer-contact small'>
                        <p className='text-capitalize mb-2'><GoLocation/> HaidaKhan Mandir road, Kathgharia, Haldwani, 263139</p>
                        <p className='mb-2'><BsFillTelephoneFill/> 7618671071, 7618671075</p>
                        <p><AiOutlineMail/> thepantheon.2019@gmail.com</p>
                    </div>
                </div>
            </div>
            <p className='mb-0 text-center pb-3 fw-bold'>Copyright © 2022 <Link to='/' className='text-mustard'>The Pantheon School</Link></p>
        </footer>
    )
}

export default Footer