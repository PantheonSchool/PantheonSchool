import CoverContainer from '../../CoverContainer'
import { cdnURL } from '../../../utils/constants'
import { useEffect } from 'react'

import './acadmicCalendar.css'
const AcademicCalendar = () => {

    const LazyLoadImages = async () => {
        var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"))
        if("IntersectionObserver" in window){
            // console.log('Inside Intersection Observer')
            let lazyImageObserver = new IntersectionObserver((ent,obs) => {
                ent.forEach((entry) => {
                    if(entry.isIntersecting){
                        let lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.remove('lazy');
                        lazyImageObserver.unobserve(lazyImage);
                    }
                });
            });
            lazyImages.forEach((lazyImage) => {
                lazyImageObserver.observe(lazyImage);
            });
        }else{
            // console.log('Inside Fallback')
            lazyImages.forEach((lazyImage) => {
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.remove('lazy');
            })
        }
    }

    useEffect(() => {
        LazyLoadImages();
    }, [])

    return (
        <CoverContainer path={['academics', 'academic calendar']} _title='ACADEMICS'>
            <div className='__academic-calendar-container pt-3 pt-sm-0'>
                {['AC_001', 'AC_002', 'AC_003', 'AC_004', 'AC_005', 'AC_006', 'AC_007', 'AC_008', 'AC_009', 'AC_010', 'AC_011', 'AC_012', 'AC_013'].map((img, idx) => <img data-src={cdnURL + `/Images/AcademicCalendar/${img}.jpg`} key={img + idx} className='img-fluid lazy' alt='' loading='lazy' />)}
            </div>
        </CoverContainer>
    )
}

export default AcademicCalendar