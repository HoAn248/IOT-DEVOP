import React, { useEffect, useState } from 'react'
import Layout from '../../../Layouts/Layout'
import style from './viewsv.module.css'
import {useParams} from 'react-router-dom'
export default function ViewSinhVien() {
    const [sinhvien, setSinhVien] = useState({})
    const id = useParams().id
    useEffect(() => {
        fetch('http://localhost:4000/sinhvien/'+id)
            .then((response) => response.json())
            .then((data) => {
                setSinhVien(data);
            })
            .catch((error) => {
                console.error('Lỗi khi lấy dữ liệu:', error);
            });
    }, []);
    return (
        <Layout>
            <div className={style.sv_container}>
                <div className={style.sv_img}>
                    <img src={sinhvien.img} alt="ok bro" />
                </div>
                <p>ID: {sinhvien.idsv}</p>
                <p>Họ tên: {sinhvien.ten}</p>
                <p>Tuổi: {sinhvien.tuoi}</p>
                <p>Lớp: {sinhvien.lop}</p>
                <p>Ngày sinh: {sinhvien.ngaysinh}</p>
            </div>

        </Layout>

    )
}
