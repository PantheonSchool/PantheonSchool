import { useState, useEffect, lazy, Suspense } from "react"
import ApiCall from "../../utils/ApiCall"

const NewsComp = lazy(() => import('./NewsComp'))

const News = () => {
    const [newsData, setNewsData] = useState([])

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
                {newsData && newsData.map((post, index) => <Suspense fallback={<>Loading...</>} key={post.title + index}><NewsComp post={post} boxSize='col-lg-3 col-md-4 col-sm-6 p-2' /></Suspense>)}
                {!newsData.length && <>
                    <NewsComp boxSize='col-lg-3 col-md-4 col-sm-6 p-2 skeleton' />
                    <NewsComp boxSize='col-lg-3 col-md-4 col-sm-6 p-2 skeleton' />
                    <NewsComp boxSize='col-lg-3 col-md-4 col-sm-6 p-2 skeleton' />
                    <NewsComp boxSize='col-lg-3 col-md-4 col-sm-6 p-2 skeleton' />
                </>}
            </div>
        </div>
    )
}

export default News