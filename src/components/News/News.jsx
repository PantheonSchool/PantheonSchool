import { useState, useEffect, lazy, Suspense } from "react"
import ApiCall from "../../utils/ApiCall"
import { Modal } from "react-bootstrap"
import NewsTemplate from "./NewsTemplate"

const NewsComp = lazy(() => import('./NewsComp'))

const News = () => {
    const [newsData, setNewsData] = useState([])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [modalData, setModalData] = useState({
        content: "",
        post: ""
    })

    useEffect(() => {
        const getNewsData = async () => {
            const data = await ApiCall('/api/news', 'GET');
            if (data.status) setNewsData(data.data)
        }
        getNewsData()
    }, [])
    return (
        <div className='container-fluid px-4 pt-md-4'>
            <h1 className='fw-bold display-3'>NEWS</h1>
            <hr />
            <div className="posts row justify-content-center">
                {newsData && newsData.map((post, index) => <Suspense fallback={<>Loading...</>} key={post.title + index}><NewsComp setModalData={setModalData} handleShow={handleShow} post={post} boxSize='col-lg-3 col-md-4 col-sm-6 p-2' /></Suspense>)}
                {!newsData.length && <>
                    <NewsComp boxSize='col-lg-3 col-md-4 col-sm-6 p-2 skeleton' />
                    <NewsComp boxSize='col-lg-3 col-md-4 col-sm-6 p-2 skeleton' />
                    <NewsComp boxSize='col-lg-3 col-md-4 col-sm-6 p-2 skeleton' />
                    <NewsComp boxSize='col-lg-3 col-md-4 col-sm-6 p-2 skeleton' />
                </>}
            </div>
            <Modal show={show} size='md' onHide={handleClose}>
                <Modal.Header closeButton />
                <Modal.Body>
                    {modalData && modalData.content === 'image' ? <img alt='' src={modalData.post} className='w-100' /> : <div className="post">
                        <NewsTemplate post={modalData.post} />
                    </div>}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default News