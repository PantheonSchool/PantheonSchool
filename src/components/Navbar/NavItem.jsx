import { Dropdown } from "react-bootstrap"
import { useState } from "react"
import { Link } from "react-router-dom"
const NavItem = ({ item,handleClose }) => {
    const [show,setShow] = useState(false)
    return <>
        {item.hasList ? <Dropdown autoClose={false} show={show} drop='down'>
            <Dropdown.Toggle onClick={() => setShow(!show)} className='text-start bg-transparent fw-bold h-100 text-white px-3 py-2 '>
                {item.title}
            </Dropdown.Toggle>
            <Dropdown.Menu className='py-0 my-0 border-top py-2' renderOnMount={true}>
                {item.list && item.list.map((it, index) => <Link onClick={handleClose} key={it.title + index} className='dropdown-item py-2 text-light' to={it.link || '/'}>{it.title}</Link>)}
            </Dropdown.Menu>
        </Dropdown> :
            <Link className='fw-bold px-3 text-light nav-link' to={item.link || '/'}>{item.title}</Link>}
    </>
}

export default NavItem