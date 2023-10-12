import React, { useEffect, useState } from 'react'
import Layout from '../../../Layouts/Layout'
import style from './updatesv.module.css'
import { useParams } from 'react-router-dom'
export default function UpdateSinhVien() {
    const id = useParams().id
    const [idsv, setIDsv] = useState('')
    const [tensv, setTenSV] = useState('')
    const [tuoi, setTuoi] = useState('')
    const [ngaysinh, setNgaySinh] = useState('')
    const [lop, setLop] = useState('')
    useEffect(() => {
        fetch('http://localhost:4000/sinhvien/' + id)
            .then((response) => response.json())
            .then((data) => {
                setIDsv(data.idsv);
                setTenSV(data.ten);
                setTuoi(data.tuoi);
                setNgaySinh(data.ngaysinh);
                setLop(data.lop);
            })
            .catch((error) => {
                console.error('Lỗi khi lấy dữ liệu:', error);
            });
    }, []);

    function doiTen(e) {
        setTenSV(e.target.value)
    }
    function doiID(e) {
        setIDsv(e.target.value)
    }
    function doiTuoi(e) {
        setTuoi(e.target.value)
    }
    function doiNgaySinh(e) {
        setNgaySinh(e.target.value)
    }
    function doiLop(e) {
        setLop(e.target.value)
    }

    function postUpdate() {
        fetch('http://localhost:4000/sinhvien/update/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ten: tensv,
                idsv: idsv,
                tuoi: tuoi,
                ngaysinh: ngaysinh,
                lop: lop
            }),
        })
            .then((res) => {
                if (res.status === 200) alert('Sửa thành công')
            })
    }
    return (
        <Layout>
            <div className={style.update_container}>
                <input onChange={doiID} value={idsv} placeholder="ID"></input>
                <input onChange={doiTen} value={tensv} placeholder="Tên sinh viên"></input>
                <input onChange={doiLop} value={lop} placeholder="Lớp"></input>
                <input onChange={doiTuoi} value={tuoi} placeholder="Tuổi"></input>
                <input onChange={doiNgaySinh} value={ngaysinh} placeholder="Ngày sinh"></input>
                <button onClick={postUpdate} className={style.button_3}>Submit</button>
            </div>
        </Layout>
    )
}
