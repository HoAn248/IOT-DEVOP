import React from 'react'
import Layout from '../../../Layouts/Layout'
import style from './deletesv.module.css'
import { useParams ,useNavigate} from 'react-router-dom'
export default function UpdateSinhVien() {
    const id = useParams().id
    const navigate = useNavigate()


    function postDelete() {
        fetch('http://localhost:4000/sinhvien/delete/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                if (res.status === 200) alert('Xóa thành công')
                navigate('/admin/sinhvien')
            })
    }
    return (
        <Layout>
            <div className={style.update_container}>
                <button onClick={postDelete} className={style.button_3}>Đồng ý</button>
            </div>
        </Layout>
    )
}
