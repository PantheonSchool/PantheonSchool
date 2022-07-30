import { useContext } from "react"
import { AuthContext } from "../../utils/ContextAPI/AuthContext"

const Visit = () => {
    const { navHeight } = useContext(AuthContext)
    return (
        <div>
            <iframe className="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.6148657887325!2d79.47888661490823!3d29.23488088218401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09b24e09b03dd%3A0xb24beeedfc0d5a68!2sThe%20Pantheon%20School%2C%20Haldwani!5e0!3m2!1sen!2sin!4v1659162653248!5m2!1sen!2sin" style={{ border: '0',height:'100vh' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Visit