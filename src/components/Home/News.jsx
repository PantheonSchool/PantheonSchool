import { useState, useEffect } from "react";
import ApiCall from "../../utils/ApiCall";
import NewsComp from "../News/NewsComp";

const News = () => {
  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    const getNewsData = async () => {
      const data = await ApiCall(`/api/news?homepage=${true}`, 'GET')
      if (data.status) setNewsData(data.data)
    }
    getNewsData();
  }, [])

  return (
    <div className="position-relative news-section mt-5">
      <div className="mt-3 p-md-5 p-2 text-light text-center">
        <div className="content mt-5">
          <p className="mb-0">FEATURED NEWS</p>
          <h2 className="fw-bold display-4">WHAT'S HAPPENING AT PANTHEON</h2>
        </div>
      </div>
      <div className="posts d-flex my-1 p-3 flex-row justify-content-md-between overflow-auto overflow_hide">
        {newsData && newsData.map((post, index) => (
          <NewsComp homepage='homepage' boxSize='p-2' post={post} key={post.title + index} />
        ))}
      </div>
    </div>
  );
};

export default News;
