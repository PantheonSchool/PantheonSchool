import { Form, ToastBody } from 'react-bootstrap'
import { useState } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { toast } from 'react-toastify'
import ApiCall from '../../../utils/ApiCall'

const NewsCard = ({ news, getNewsData }) => {

    const [edit, setEdit] = useState(false)
    const [isImp, setImp] = useState(news.important)

    const deleteNews = async () => {
        if (window.confirm('Are you sure?')) {
            toast.error('Deletion in Progress');
            const data = await ApiCall(`/api/news/${news._id}`, 'DELETE')
            toast.dismiss()
            if (data.status) {
                toast.success('News Deleted Successfully')
                getNewsData();
            }
            else {
                console.error(data.error)
                toast.error('Some Error Occurred')
            }
        }
    }

    const UpdateNews = async e => {
        e.preventDefault()
        toast.info(`Updating the News: ${news.title}`)
        setEdit(false)
        const fd = new FormData(e.target);
        fd.append('important', isImp)
        const data = await ApiCall(`/api/news/${news._id}`, 'PATCH', Object.fromEntries(fd))
        toast.dismiss()
        if (data.status) {
            toast.success('News Updated Successfully')
            getNewsData()
        }
        else {
            console.error(data.error)
            toast.error('Some Error Occurred')
        }
    }
    return (
        <div className='p-2 shadow-sm border mb-4'>
            <div className='d-flex justify-content-end'>
                <button className='btn' onClick={() => setEdit(!edit)}><AiFillEdit /></button>
                <button className='btn' onClick={deleteNews}><AiFillDelete /></button>
            </div>
            <Form onSubmit={(e) => UpdateNews(e)}>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <Form.Control defaultValue={news.imgURL} name='imgURL' readOnly={!edit} type='text' />
                        <label>Photo Link</label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <Form.Control defaultValue={news.title} name='title' readOnly={!edit} type='text' />
                        <label>Title</label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <textarea readOnly={!edit} name='body' defaultValue={news.body} className="form-control" rows={3} />
                        <label>Body</label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <Form.Control name='date' defaultValue={news.date} readOnly={!edit} type='date' />
                        <label>Date</label>
                    </Form.Floating>
                </Form.Group>
                <Form.Check defaultChecked={isImp} onChange={() => setImp(!isImp)} disabled={!edit} type="switch" label="Important?" className="py-1" />
                {edit && <button type='submit' className="btn-v3 text-dark px-5 py-2 mx-0">SUBMIT</button>}
            </Form>
        </div>
    )
}

export default NewsCard