import { AiFillStar } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useState, useEffect } from 'react'
import ApiCall from '../../utils/ApiCall'

const GoogleReviews = () => {

    const ReviewCard = ({ review }) => {
        const { author_name, profile_photo_url, rating, text, relative_time_description } = review

        const ratingStars = () => {
            let stars = [];
            for (let i = 0; i < rating; i++) {
                stars.push(<AiFillStar className='fs-4' style={{ color: '#f7bb36' }} />);
            }
            return stars;
        }

        return (
            <div className="col-11 col-sm-6 col-md-4 col-lg-3 p-2">
                <div className="border shadow-sm p-3 text-center h-100">
                    <img src={profile_photo_url} alt={author_name} className='my-3' />
                    <p className="fw-bold">{author_name}</p>
                    <div className='d-flex justify-content-center'>
                        {ratingStars()}
                    </div><br />
                    <p className='text-start review'>{text}</p>
                    <p className='small text-muted'><FcGoogle className='fs-5' />&emsp;{relative_time_description}</p>
                </div>
            </div>
        )
    }

    const SkeletonReviewCard = () => {
        const ratingStars = () => {
            let stars = [];
            for (let i = 0; i < 5; i++) {
                stars.push(<AiFillStar className='fs-4 stars' />);
            }
            return stars;
        }
        return (
            <div className="col-11 col-sm-6 col-md-4 col-lg-3 p-2 skeleton">
                <div className="border shadow-sm p-3 text-center h-100">
                    <div className='user_img mx-auto' />
                    <p className="fw-bold username"></p>
                    <div className='d-flex justify-content-center'>
                        {ratingStars()}
                    </div><br />
                    <p className='text-start review'></p>
                    <p className='text-start review'></p>
                    <p className='text-start review'></p>
                    <p className='text-start review'></p>
                    <p className='time_ago'></p>
                </div>
            </div>
        )
    }

    const [reviewData, setReviewData] = useState([])

    const getReviewData = async () => {
        try {
            const data = await ApiCall('/api/review', 'GET');
            if (data.status)
                setReviewData(data.reviews)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getReviewData()
    }, [])


    return (
        <div className="reviews pt-5 pb-3 px-3 px-lg-5">
            <h1 className="text-center display-4 fw-bold letter-spacing-1">OUR REVIEWS</h1>
            <div className="d-flex overflow-auto scrollbar-v1">
                {reviewData && reviewData.map((review, index) => <ReviewCard review={review} key={"google" + index + "Review"} /> )}
                {!reviewData.length && <>
                    <SkeletonReviewCard />
                    <SkeletonReviewCard />
                    <SkeletonReviewCard />
                    <SkeletonReviewCard />
                </>}
            </div>
        </div>
    )
}

export default GoogleReviews