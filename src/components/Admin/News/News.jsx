import { useEffect, useState } from "react"
import NewsForm from "./NewsForm"
import NewsCard from "./NewsCard"

const News = () => {
    const [newsData, setNewsData] = useState([])
    return (<>
        <div className="row">
            <div className="col-md-6">
                <NewsForm />
            </div>
            <div className="col-md-6">
                <NewsCard />
            </div>
        </div>
    </>
    )
}

export default News