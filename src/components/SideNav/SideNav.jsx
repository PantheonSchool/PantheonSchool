import './sidenav.css'
import { NavLink } from 'react-router-dom'
import { Collapse } from 'react-bootstrap'
import { BiChevronDown } from 'react-icons/bi'
import { useState, useEffect } from 'react'

const SideNav = ({ navData }) => {

    const [open, setOpen] = useState(true)

    useEffect(() => {
        if (window.screen.width <= 576) {
            setOpen(false)
        }
    }, [])

    return navData && (
        <div className='__sideNav_container letter-spacing-1 py-2 py-sm-5'>
            <p className='fw-bold title mb-0 mb-md-3'><span>IN THIS SECTION</span> <button className='btn p-0 d-sm-none' onClick={() => setOpen(!open)} aria-controls='sidenav-collapse' aria-expanded={open}><BiChevronDown className='fs-4' style={{
                transform: open && 'rotateX(180deg)',
                transition:'all 0.5s linear'
            }} /></button></p>
            <Collapse in={open}>
                <div id='sidenav-collapse'>
                    <div className='content mb-2 mb-md-5 d-flex flex-column fw-bold'>
                        {navData.list.map((el, index) => <NavLink key={el.title + index} to={el.link} className='text-dark' activeClassName>{el.title}</NavLink>)}
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

export default SideNav