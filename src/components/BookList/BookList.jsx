import Cover from "../Cover"
import { Dropdown, Table } from "react-bootstrap"
import { useState, useEffect } from "react"
import BookData from "./BookData"

import './booklist.css'

const BookList = () => {

    const [bookClass, setBookClass] = useState('Nursery')
    const [book, setBook] = useState(BookData[bookClass])

    useEffect(() => {
        setBook(BookData[bookClass])
    }, [bookClass])

    const classDropdown = () => {
        let classes = ['Nursery', 'LKG', 'UKG'];

        for (let i = 1; i <= 8; i++) {
            classes.push(i)
        }

        return classes
    }

    return (
        <div className="__booklist_container text-light">
            <Cover />
            <div className="container py-5">
                <h1 className='text-uppercase letter-spacing-1'><span className='display-2 fw-bold'>Book</span> <span className='display-2'>list</span></h1>
                <div className="__toggle_booklist">
                    <Dropdown>
                        <Dropdown.Toggle className="__toggle_btn">
                            Book List of Class: {bookClass}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {classDropdown().map((cl, idx) => <Dropdown.Item as='button' className="text-light" onClick={() => setBookClass(cl)}>Class {cl}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='overflow-auto scrollbar-v1 mb-5 mt-3'>
                    <p className="fs-4 fw-bold text-center">Book List Class {bookClass}</p>
                    {book && <Table bordered className="border-dark text-center">
                        <thead className="text-light">
                            <tr>
                                <th>S N</th>
                                <th>Subject</th>
                                <th>Name of Book</th>
                                <th>Publication</th>
                            </tr>
                        </thead>
                        <tbody className="bg-light">
                            {book.bookList.map((det, idx) => {

                                const additionalNames = () => {
                                    let bookNames = [];
                                    for (let i = 1; i < det.names.length; i++) {
                                        bookNames.push(<tr>
                                            <td>{det.names[i].name}</td>
                                            <td>{det.names[i].publication}</td>
                                        </tr>)
                                    }
                                    return bookNames
                                }

                                return <>
                                    <tr>
                                        <td rowSpan={det.names.length}>{idx + 1}</td>
                                        <td rowSpan={det.names.length}>{det.subject}</td>
                                        <td>{det.names[0].name}</td>
                                        <td>{det.names[0].publication}</td>
                                    </tr>
                                    {additionalNames()}
                                </>
                            })}
                        </tbody>
                    </Table>}
                </div>
            </div>
        </div >
    )
}

export default BookList