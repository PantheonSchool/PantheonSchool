import { useState, useEffect } from "react"
import './news.css'
const NewsComp = ({ post, homepage, boxSize }) => {
    const [date, setDate] = useState()
    useEffect(() => {
        if (!post) return
        const det = new Date(post.date)
        const month = det.toLocaleString('en-us', { month: 'long' })
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const day = dayNames[det.getDay()]
        setDate(`${day}, ${month} ${det.getDate()}, ${det.getFullYear()}`)
    }, [])

    return (
        <div className={boxSize}>
            <div className={`post ${homepage}`}>
                <div className="image">
                    <img alt={post && post.title ? post.title : ''} src={post && post.imgURL ? post.imgURL : ''} className='w-100' />
                    <div className="_skeletonImg"/>
                </div>
                <div className="py-2">
                    <h6 className="date fw-bold">{date}</h6>
                    <h5 className="title text-dark fw-bold">{post && post.title ? post.title : ''}</h5>
                    <div className="body">{post && post.body ? post.body : ''}</div>
                    <div className="skeleton-text"/>
                    <div className="skeleton-text"/>
                    <div className="skeleton-text"/>
                    <div className="skeleton-text"/>
                </div>
            </div>
        </div>
    );
}

export default NewsComp
