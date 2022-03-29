import { AiFillWarning } from 'react-icons/ai'

const Page404 = () => {
    return (
        <div style={{ minHeight: '70vh' }} className='d-flex flex-column align-items-center justify-content-center'>
            <AiFillWarning style={{fontSize:'10rem'}} className='text-warning' />
            <p className='fw-bold text-warning text-uppercase display-6'>Page under Construction</p>
        </div>
    )
}

export default Page404