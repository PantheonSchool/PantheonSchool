import { FaUserEdit, FaInbox } from "react-icons/fa"
import { BsPeopleFill } from 'react-icons/bs'

const AdminMenu = [
    {
        title: 'Register New Admin',
        link: '/admin/register',
        Icon: FaUserEdit,
        color: 'danger'
    },
    {
        title: 'News Section',
        link: '/admin/news',
        Icon: FaInbox,
        color: 'success'
    },
    {
        title: 'Inquire Section',
        link: '/admin/inquire',
        Icon: FaInbox,
        color: 'secondary'
    },
    {
        title: 'Faculty Section',
        link: '/admin/faculty',
        Icon: BsPeopleFill,
        color: 'pantheon-blue'
    }
]

export default AdminMenu