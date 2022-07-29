import { AuthContext } from "../../../utils/ContextAPI/AuthContext"
import { useContext, useEffect, useState } from "react"

const News = () => {
    const { navHeight } = useContext(AuthContext)
    const [newsData, setNewsData] = useState([])
    return (
        <div className="container" style={{ marginTop: navHeight.current + 50 }}>
            <div className="row">
                <div className="col-md-6">
                    <div className="p-2 shadow">

                    </div>
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div>
    )
}

export default News