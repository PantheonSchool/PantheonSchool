import { cdnURL } from "../utils/constants"

const Cover = ({ backgroundImg }) => {
    return (
        <div className='cover'>
            <img src={cdnURL + backgroundImg} alt='Apply Cover' className='img-fluid' />
        </div>
    )
}

export default Cover