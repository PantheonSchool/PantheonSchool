import { useState, useEffect } from "react"
import ApiCall from "../../utils/ApiCall"
import { Table } from 'react-bootstrap'

const Inquire = () => {
    const [inquiryData, setInquiryData] = useState([]);

    const getInquiryData = async () => {
        const data = await ApiCall('/api/inquiry', 'GET');
        if (data.status) {
            setInquiryData(data.data);
            // console.log(data)
        }
    }

    const deleteInquiry = async (_id, e) => {
        if (window.confirm(`Delete Inquiry ID:${_id}`)) {
            e.target.innerHTML = ''
            e.target.classList.remove('btn-danger')
            e.target.classList.add('spinner-border')
            const data = await ApiCall(`/api/inquiry/${_id}`, 'DELETE');
            if (data.status) getInquiryData();
            else alert('Some error Occured')
        }
    }

    const ConvertInquiryDate = (date) => {
        const UpdatedDate = new Date(date);
        return UpdatedDate.toDateString()
    }

    const InquiryCard = ({ inquiry, index }) => {
        return <tr>
            <td>{index + 1}</td>
            <td>{inquiry.fullname}</td>
            <td>{inquiry.contact_no}</td>
            <td>{inquiry.email}</td>
            <td>{inquiry.message}</td>
            <td>{ConvertInquiryDate(inquiry.updatedAt)}</td>
            <td><button onClick={(e) => deleteInquiry(inquiry._id, e)} className="btn btn-danger py-0 rounded-pill letter-spacing-1">DELETE</button></td>
        </tr>
    }

    useEffect(() => {
        getInquiryData();
    }, [])
    return (<>
        <h1 className="text-center fw-bold text-pantheon-blue mb-3">INQUIRY SECTION</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {inquiryData && inquiryData.map((inquiry, index) => <InquiryCard key={inquiry.email + index} inquiry={inquiry} index={index} />)}
            </tbody>
        </Table>
    </>
    )
}

export default Inquire