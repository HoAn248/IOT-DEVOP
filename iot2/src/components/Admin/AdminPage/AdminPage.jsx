import React, { useEffect, useState } from 'react'
import Layout from '../../Layouts/Layout'
import style from './adminpage.module.css'
import { Link } from 'react-router-dom'

export default function AdminPage() {
    const [monHoc, setMonHoc] = useState([])
    const [sinhvien, setSinhVien] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:4000/monhoc')
            .then((response) => response.json())
            .then((data) => {
                setMonHoc(data);
            })
            .catch((error) => {
                console.error('Lỗi khi lấy dữ liệu:', error);
            });
    }, []);
    useEffect(() => {
        fetch('http://127.0.0.1:4000/sinhvien/all')
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
            <main className={style.admin_show}>
                <div className={style.admin_container}>
                    <div className={style.admin_title}>
                        <h1>Trang Quản Lí Sinh Viên, Môn Học, Lớp Học</h1>
                    </div>
                    <div className={style.admin_table}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Thông tin</th>
                                    <th>Số lượng</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Lớp</td>
                                    <td>0</td>
                                    <td><Link to="./lop" rel="noopener noreferrer">Hiển thị thêm</Link></td>
                                </tr>
                                <tr>
                                    <td>Sinh Viên</td>
                                    <td>{sinhvien.length}</td>
                                    <td><Link to="./sinhvien" rel="noopener noreferrer">Hiển thị thêm</Link></td>
                                </tr>
                                <tr>
                                    <td>Môn Học</td>
                                    <td>{monHoc.length}</td>
                                    <td><Link to="./monhoc" rel="noopener noreferrer">Hiển thị thêm</Link></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </main>


        </Layout>
    )
}
