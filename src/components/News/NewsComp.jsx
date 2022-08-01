import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
const NewsComp = ({ post, homepage, boxSize }) => {
    const [date, setDate] = useState()
    useEffect(() => {
        const det = new Date(post.date)
        const month = det.toLocaleString('en-us', { month: 'long' })
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const day = dayNames[det.getDay()]
        setDate(`${day}, ${month} ${det.getDate()}, ${det.getFullYear()}`)
    }, [])

    return (
        <Link to='/news' className={`${boxSize}`}>
            <div className={`post ${homepage}`}>
                <div className="image">
                    <img alt={post.title} src={post.imgURL} className='w-100' />
                </div>
                <div className="py-2">
                    <h6 className="date fw-bold">{date}</h6>
                    <h5 className="title text-dark fw-bold">{post.title}</h5>
                    <div className="body">{post.body}</div>
                </div>
            </div>
        </Link>
    );
}

export default NewsComp
