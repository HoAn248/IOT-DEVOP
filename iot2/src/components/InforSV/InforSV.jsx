import React from 'react'
import Layout from '../Layouts/Layout'
import style from './inforsv.module.css'

export default function InforSV() {
    return (
        <Layout>
            <main className={style.main}>
                <div className={style.infor_main}>
                    <div className={style.infor_sv}>
                        <ul>
                            <li>
                                <p>Tên: <span>Hồ Đức An</span></p>
                            </li>
                            <li>
                                <p>Mã sinh viên: <span>52809</span></p>
                            </li>
                            <li>
                                <p>Tuổi: <span>30</span></p>
                            </li>
                            <li>
                                <p>Ngày sinh: <span>24/08/2002</span></p>
                            </li>
                            <li>
                                <p>Lớp: <span>ST20A2A</span></p>
                            </li>
                        </ul>
                    </div>
                    <div className={style.infor_vh}>
                        <ul className={style.list_infor}>
                            <li>Môn học</li>
                            <li>Thời gian</li>
                            <li>Phép</li>
                            <li>Giảng viên</li>
                        </ul>
                        <hr></hr>
                        <div className={style.list_box}>
                            <ul className={style.list_infor}>
                                <li>Lập trình JS</li>
                                <li>10/09/2023</li>
                                <li>Có</li>
                                <li>Tạ Quốc Ý</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
