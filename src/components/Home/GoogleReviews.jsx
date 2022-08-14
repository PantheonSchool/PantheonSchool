import { useRef, useEffect } from "react"
import useScript from "../../utils/useScripts"
const GoogleReviews = () => {
    const reviewRef = useRef()
    useScript("https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDeivU57j-macv2fXXgbhKGM6cqMLmnAFI&signed_in=true&libraries=places")
    useScript("https://cdn.jsdelivr.net/gh/stevenmonson/googleReviews@6e8f0d794393ec657dab69eb1421f3a60add23ef/google-places.js")
    useScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js")
    useEffect(() => {
        
    }, [])
    return (
        <div ref={reviewRef}/>
    )
}

export default GoogleReviews