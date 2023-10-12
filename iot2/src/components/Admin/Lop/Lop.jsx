import React from 'react'
import Layout from '../../Layouts/Layout'
import style from './lop.module.css'
import { Link } from 'react-router-dom'

export default function Lop() {
  return (
    <Layout>
         <main className={style.class_show}>
                <div className={style.class_container}>
                    <div className={style.class_title}>
                        <h1>Trang Quản Lí Lớp Học</h1>
                    </div>
                    <div className={style.class_table}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tên Lớp</th>
                                    <th>Giáo Viên</th>
                                    <th>Thành viên</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ST20A2A</td>
                                    <td>Thầy ....</td>
                                    <td>2</td>
                                    <td><Link to="/admin/sinhvien/lop" rel="noopener noreferrer">Danh sách sinh viên</Link></td>
                                </tr>
                                <tr>
                                    <td>ST20A1A</td>
                                    <td>Thầy ....</td>
                                    <td>1</td>
                                    <td><Link to="/admin/sinhvien/lop" rel="noopener noreferrer">Danh sách sinh viên</Link></td>
                                </tr>
                                <tr>
                                    <td>ST20A2B</td>
                                    <td>Thầy ....</td>
                                    <td>1</td>
                                    <td><Link to="/admin/sinhvien/lopp" rel="noopener noreferrer">Danh sách sinh viên</Link></td>
                                </tr>
                            </tbody>
                        </table>
                     
                    </div>
                </div>
            </main>
    </Layout>
  )
}
