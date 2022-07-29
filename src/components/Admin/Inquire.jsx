import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../utils/ContextAPI/AuthContext"
import ApiCall from "../../utils/ApiCall"
import { Table } from 'react-bootstrap'

const Inquire = () => {
    const { navHeight } = useContext(AuthContext)
    const [inquiryData, setInquiryData] = useState([]);

    const getInquiryData = async () => {
        const data = await ApiCall('/api/inquiry', 'GET');
        if (data.status) {
            setInquiryData(data.data);
            // console.log(data)
        }
    }

    const deleteInquiry = async (_id) => {
        if (window.confirm(`Delete Inquiry ID:${_id}`)) {
            const data = await ApiCall('/api/inquiry', 'DELETE',_id);
            if (data.status) getInquiryData();
            else alert('Some error Occured')
        }
    }

    const InquiryCard = ({ inquiry, index }) => {
        return <tr>
            <td>{index + 1}</td>
            <td>{inquiry.fullname}</td>
            <td>{inquiry.contact_no}</td>
            <td>{inquiry.email}</td>
            <td>{inquiry.message}</td>
            <td><button onClick={() => deleteInquiry(inquiry._id)} className="btn btn-danger py-0 rounded-pill letter-spacing-1">DELETE</button></td>
        </tr>
    }

    useEffect(() => {
        getInquiryData();
    }, [])
    return (
        <div className="container" style={{ marginTop: navHeight.current + 50 }}>
            <h1 className="text-center fw-bold text-pantheon-blue mb-3">INQUIRY SECTION</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {inquiryData && inquiryData.map((inquiry, index) => <InquiryCard key={inquiry.email + index} inquiry={inquiry} index={index} />)}
                </tbody>
            </Table>
        </div>
    )
}

export default Inquire