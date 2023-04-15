import { Dropdown, Table } from "react-bootstrap"
import { useState, useEffect } from "react"
import BookData from "./BookData"
import CoverContainer from '../../CoverContainer'

import './booklist.css'

const BookList = () => {

    const [bookClass, setBookClass] = useState(1)
    const [book, setBook] = useState(BookData[bookClass])

    useEffect(() => {
        setBook(BookData[bookClass])
    }, [bookClass])

    const classDropdown = () => {
        // let classes = ['Nursery', 'LKG', 'UKG'];
        let classes = [];

        for (let i = 1; i <= 8; i++) {
            classes.push(i)
        }

        return classes
    }

    return (
        <CoverContainer path={['academics', 'book list']} _title='ACADEMICS'>
            <div className="__booklist_container text-light mt-5 mt-md-0">
                <div className="container py-5">
                    <h1 className='text-uppercase letter-spacing-1 mt-5'><span className='display-2 fw-bold'>Book</span> <span className='display-2'>list</span></h1>
                    <div className="__toggle_booklist">
                        <Dropdown className="mt-5">
                            <Dropdown.Toggle className="__toggle_btn mt-5">
                                Book List of Class: {bookClass}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {classDropdown().map((cl, idx) => <Dropdown.Item as='button' className="text-light" onClick={() => setBookClass(cl)}>Class {cl}</Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='overflow-auto scrollbar-v1 mt-5'>
                        <p className="fs-4 fw-bold text-center">Book List Class {bookClass}</p>
                        {book && <Table bordered className="border-dark text-center">
                            <thead className="text-light">
                                <tr>
                                    <th>S No.</th>
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

                        {book && <Table bordered className="border-dark text-center">
                            <thead className="text-light">
                                <tr>
                                    <th>S No.</th>
                                    <th>Note Book List Class {bookClass}</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody className="bg-light">
                                {book.notebookList.map((det, idx) => <tr key={det.name + idx}>
                                    <td>{idx + 1}</td>
                                    <td>{det.name}</td>
                                    <td>{det.qty}</td>
                                </tr>)}
                            </tbody>
                        </Table>}
                        {book && <Table bordered className="border-dark text-center">
                            <thead className="text-light">
                                <tr>
                                    <th>S No.</th>
                                    <th>Stationary for Class {bookClass}</th>
                                </tr>
                            </thead>
                            <tbody className="bg-light">
                                {book.stationary.map((det, idx) => <tr key={det + idx}>
                                    <td>{idx + 1}</td>
                                    <td>{det}</td>
                                </tr>)}
                            </tbody>
                        </Table>}
                    </div>
                </div>
            </div>
        </CoverContainer>
    )
}

export default BookList