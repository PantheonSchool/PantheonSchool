import { Link } from "react-router-dom"
import posts from "./NewsData"

const NewsComp = ({ post }) => {
    return <div className="p-2">
        <div className="post">
            <div className="image" style={{ backgroundImage: `url(${post.img})` }} />
            <h6 className="date fw-bold">{post.date}</h6>
            <h5 className="title fw-bold">{post.title}</h5>
            <div className="body mb-3">{post.body}</div>
        </div>
    </div>
}

const News = () => {
    return (
        <div className='position-relative news-section mt-5'>
            <div className='mt-3 p-md-5 p-2 text-light text-center'>
                <div className='content mt-5'>
                    <p className="mb-0">FEATURED NEWS</p>
                    <h2 className='fw-bold display-4'>WHAT'S HAPPENING AT PANTHEON</h2>
                </div>
            </div>
            <div className='posts d-flex my-1 p-3 flex-row justify-content-md-between overflow-auto overflow_hide'>
                {posts && posts.map((post, index) => <NewsComp post={post} key={post.title + index} />)}
            </div>
        </div>
    )
}

export default News