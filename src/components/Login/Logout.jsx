import { Navigate } from "react-router"
import { useEffect,useContext } from "react"
import { AuthContext } from "../../utils/ContextAPI/AuthContext"

const Logout = () => {
    const {setUser} = useContext(AuthContext)
    useEffect(() => {
        function deleteAllCookies() {
            var cookies = document.cookie.split(";");

            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
        }
        localStorage.clear();
        deleteAllCookies();
        sessionStorage.clear();
        setUser(false)
    }, [])
    return <Navigate to='/login' />
}

export default Logout