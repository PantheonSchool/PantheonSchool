import { useState, useEffect } from "react";
import ApiCall from "../../utils/ApiCall";
import NewsComp from "../News/NewsComp";
import { Link } from "react-router-dom"

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
        {!newsData.length && <>
          <NewsComp boxSize='col-lg-3 col-md-4 col-sm-6 p-2 skeleton' />
          <NewsComp boxSize='col-lg-3 col-md-4 col-sm-6 p-2 skeleton' />
          <NewsComp boxSize='col-lg-3 col-md-4 col-sm-6 p-2 skeleton' />
          <NewsComp boxSize='col-lg-3 col-md-4 col-sm-6 p-2 skeleton' />
        </>}
        {newsData && newsData.map((post, index) => (
          <Link to='/news' key={post.title + index}>
            <NewsComp homepage='homepage' boxSize='p-2' post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default News;
