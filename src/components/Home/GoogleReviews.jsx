import { AiFillStar } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

const GoogleReviews = () => {

    const ReviewCard = ({ review }) => {
        return (
            <div className="col-11 col-sm-6 col-md-4 col-lg-3 p-2">
                <div className="border shadow-sm p-3 text-center h-100">
                    <img src={review.userimg} alt={review.username} className='my-3'/>
                    <p className="fw-bold">{review.username}</p>
                    <div className='d-flex justify-content-center'>
                        <AiFillStar className='fs-4' style={{ color: '#f7bb36' }} />
                        <AiFillStar className='fs-4' style={{ color: '#f7bb36' }} />
                        <AiFillStar className='fs-4' style={{ color: '#f7bb36' }} />
                        <AiFillStar className='fs-4' style={{ color: '#f7bb36' }} />
                        <AiFillStar className='fs-4' style={{ color: '#f7bb36' }} />
                    </div><br />
                    <p className='text-justify review'>{review.description}</p>
                    <p className='small text-muted'><FcGoogle className='fs-5' />&emsp;{review.date}</p>
                </div>
            </div>
        )
    }

    const reviewData = [
        {
            username: 'Khusboo Khushi Bisht',
            date: '11 months ago',
            description: `first of all, I'm thankful to The Pantheon School for allowing me to work here as a teacher. As a teacher, I learned a lot of new things and got wonderful experiences here. A big thanks to our management for supporting and guiding us very well. The staff is also very cooperative, hardworking and helpful. This school is surely the best one for the children education and their growth.`,
            userimg: 'https://lh3.googleusercontent.com/a-/AFdZucqeft576NE5cpNM67sNcf1kyNEleatN6UEWoiy76A=w75-h75-p-rp-mo-br100'
        },
        {
            username: 'Vaishnavi. suyal',
            date: 'a year ago',
            description: `I would like to take this opportunity to thank all the teachers for the efforts they are putting together to teach our children. Preparing lessons, making kids learn through fun, all this through distance learning. It is very difficult to teach such small kids online. However you all are making sure that each kid gets proper attention and the learning is smooth.
            I really appreciate the fact that focus is not just on finishing the syllabus but also ensuring that each kid is learning properly. The kids are also enjoying the co-curricular activities which are taking place along with the main subjects. It makes them look forward for the classes.
            It is indeed a very difficult time for all of us but the teachers are making sure that learning doesn’t stop.
            Once again thank you to all the teachers who are helping my child learn today and everyday.`,
            userimg:'https://lh3.googleusercontent.com/a-/AFdZucrhCVCFLXt9nKlnoafdi-ced18vz5JY6U0KnjuV8A=w75-h75-p-rp-mo-br100'
        },
        {
            username: 'Akshika Rawat',
            date: '11 months ago',
            description: `Myself Akshika Rawat grade 7 senior student
            The pantheon school is best school In this school education and other activities is also good the teachers are also brilliant teacher's take doubt class and very hardworking teacher's thank you happy teachers day`,
            userimg:'https://lh3.googleusercontent.com/a-/AFdZucqqAbfUQwtFYTl3u1bcatZbL6OY26EScOWiaLd4=w75-h75-p-rp-mo-br100'
        },
        {
            username: 'Nisha Banaula',
            date: 'a year ago',
            description: `The Pantheon School give me opportunities for my professional growth and help me unleash my potential .I am thankful to the management for supporting me .Staff is very helpful and cooperative.The School is committed to provide education that helps to develop children into balanced personalities.`,
            userimg:'https://lh3.googleusercontent.com/a-/AFdZucpvmhcY5Db2hJnGNiun-k_BIS7T3UNGJrpXuWM6=w75-h75-p-rp-mo-br100'
        },
        {
            username: 'jyoti joshi',
            date: 'a year ago',
            description: `All staff is very supportive and well professional, they always try thier best, all activities providing I m happy my kid's studying here.`,
            userimg:'https://lh3.googleusercontent.com/a-/AFdZucoYyE4DQCa13yiAQmuGD8nH3ufhkZBKRTv0av7o=w75-h75-p-rp-mo-br100'
        }
    ]
    return (
        <div className="reviews pt-5 pb-3 px-3 px-lg-5">
            <h1 className="text-center display-4 fw-bold letter-spacing-1">OUR REVIEWS</h1>
            <div className="d-flex overflow-auto scrollbar-v1">
                {reviewData && reviewData.map((review, index) => <ReviewCard review={review} key={review.username + index} />)}
            </div>
        </div>
    )
}

export default GoogleReviews