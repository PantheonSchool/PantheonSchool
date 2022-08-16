import { FaChevronCircleDown } from 'react-icons/fa'
import { BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

const Cover = () => {

    const coverRef = useRef()
    const [bgImg, setBgImg] = useState([]);
    let imgIndex = 0;
    var BgTimeout;

    const toggleBackground = () => {
        if (bgImg.length) {
            try {
                coverRef.current.style.background = `url(${bgImg[imgIndex]})`;
                imgIndex++;
                imgIndex = imgIndex % 4;
                BgTimeout = setTimeout(toggleBackground, 10000)
            }
            catch (err) {
                console.error(err);
            }

        }
    }

    const prevBackground = () => {
        clearTimeout(BgTimeout)
        imgIndex--;
        if(imgIndex < 0) imgIndex = 3;
        coverRef.current.style.background = `url(${bgImg[imgIndex]})`;
    }

    const nextBackground = () => {
        clearTimeout(BgTimeout)
        imgIndex++;
        imgIndex = imgIndex % 4;
        coverRef.current.style.background = `url(${bgImg[imgIndex]})`;
    }

    useEffect(() => {
        setBgImg([
            'https://cdn.jsdelivr.net/gh/PantheonSchool/pantheon-assets@latest/Images/Cover2.jpg',
            'https://cdn.jsdelivr.net/gh/PantheonSchool/pantheon-assets@latest/Images/Cover3.jpg',
            'https://cdn.jsdelivr.net/gh/PantheonSchool/pantheon-assets@latest/Images/Cover4.jpg',
            'https://cdn.jsdelivr.net/gh/PantheonSchool/pantheon-assets@latest/Images/Cover5.jpg'
        ])
    }, [])

    useEffect(() => {
        toggleBackground();
    }, [bgImg])


    return (
        <div className='position-relative'>
            <div ref={coverRef} className='pantheon-cover d-flex flex-column justify-content-center align-items-center'>
                <p style={{ marginTop: '145px' }} className='display-4 text-center mb-1 mt-md-auto text-uppercase hero-content fw-bold text-light'><span>Education for a changing world</span></p>
                <div style={{ zIndex: '0' }} className='p-2 text-light mb-5 mt-auto mt-md-5 text-light d-flex align-items-center flex-column'>
                    <h6 className='text-uppercase drop-shadow-sm fw-bold'><span>Find Your Way</span></h6>
                    <div className="line my-1" />
                    <FaChevronCircleDown className='fs-5' id='cover-down-arrow' />
                </div>
            </div>
            <nav className="hero-links text-uppercase fw-bold small shadow-sm">
                <ul className='px-md-5 py-md-3 py-2'>
                    <li><Link className='text-dark d-flex flex-row align-items-center' to='/apply'>Apply <BsChevronRight className='small ms-1' /></Link></li>
                    <li><Link className='text-dark d-flex flex-row align-items-center' to="/visit">Visit <BsChevronRight className='small ms-1' /></Link></li>
                </ul>
            </nav>
            <div onClick={prevBackground} className='__prev_cover'>
                <MdOutlineArrowBackIosNew />
            </div>
            <div onClick={nextBackground} className='__next_cover'>
                <MdOutlineArrowBackIosNew />
            </div>
        </div>
    )
}

export default Cover