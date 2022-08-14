import NewsTemplate from "./NewsTemplate"
import './news.css'
const NewsComp = ({ post, homepage, boxSize, setModalData, handleShow }) => {

    const handleModal = (_content, _post) => {
        setModalData({
            content: _content,
            post: _post
        })
        handleShow()
    }

    return (
        <div className={boxSize}>
            <div className={`post ${homepage}`}>
                <NewsTemplate handleModal={handleModal} post={post} cursor='cursor-pointer' />
            </div>
        </div>
    );
}

export default NewsComp
