import { useEffect, useState } from "react"
import NewsForm from "./NewsForm"
import NewsCard from "./NewsCard"
import ApiCall from "../../../utils/ApiCall"
import './news.css'

const News = () => {
    const [newsData, setNewsData] = useState([])

    const getNewsData = async () => {
        const data = await ApiCall('/api/news', 'GET')
        if (data.status) setNewsData(data.data);
    }

    useEffect(() => {
        getNewsData();
    }, [])
    return (<>
        <h1 className="text-center fw-bold text-pantheon-blue mb-3">NEWS SECTION</h1>
        <div className="row">
            <div className="col-12 mb-4">
                <NewsForm getNewsData={getNewsData} />
            </div>
            <div className="col-12 row __news-cards px-0 mx-auto">
                {newsData && newsData.map((news, index) => <NewsCard news={news} key={news.title + index} getNewsData={getNewsData} />)}
            </div>
        </div>
    </>
    )
}

export default News