import { useState, useEffect } from "react"

const NewsTemplate = ({ post, handleModal, cursor }) => {
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
        <>
            <div className="image">
                <img onClick={() => handleModal('image', post.imgURL)} alt={post && post.title ? post.title : ''} src={post && post.imgURL ? post.imgURL : ''} className={`w-100 ${cursor}`} />
                <div className="_skeletonImg" />
            </div>
            <div onClick={() => handleModal('post', post)} className={`py-2 ${cursor}`}>
                <h6 className="date fw-bold">{date}</h6>
                <h5 title={post?.title} className="title text-dark fw-bold">{post && post.title ? post.title : ''}</h5>
                <div className="body">{post && post.body ? post.body : ''}</div>
            </div>
            <div className="skeleton-text" />
            <div className="skeleton-text" />
            <div className="skeleton-text" />
            <div className="skeleton-text" />
        </>
    )
}

export default NewsTemplate