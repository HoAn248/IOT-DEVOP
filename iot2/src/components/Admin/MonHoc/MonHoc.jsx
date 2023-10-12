import React from 'react'
import Layout from '../../Layouts/Layout'
import style from './monhoc.module.css'
export default function MonHoc() {
    const [monHoc, setMonHoc] = React.useState([])
    React.useEffect(() => {
        fetch('http://localhost:4000/monhoc')
            .then((response) => response.json())
            .then((data) => {
                setMonHoc(data);
            })
            .catch((error) => {
                console.error('Lỗi khi lấy dữ liệu:', error);
            });
    }, []);

    return (
        <Layout>
            <main className={style.monhoc_show}>
                <div className={style.monhoc_container}>
                    <div className={style.monhoc_title}>
                        <h1>Trang Quản Lí Môn Học</h1>
                    </div>
                    <div className={style.monhoc_table}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tên Môn</th>
                                    <th>Giáo Viên</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    monHoc.map((e) => (
                                        <tr key={e._id}>
                                            <td >{e.tenmon}</td>
                                            <td>{e.giaovien}</td>
                                        </tr>
                                    ))
                                }
                                {/* <tr>
                                    <td>Lập trình giao diện Web</td>
                                    <td>Thầy ....</td>
                                </tr>
                                <tr>
                                    <td>Lớp học thầy Huấn</td>
                                    <td>Thầy ....</td>
                                </tr>
                                <tr>
                                    <td>Lớp sống đẹp, sống sạch</td>
                                    <td>Cô ....</td>
                                </tr> */}
                            </tbody>
                        </table>

                    </div>
                </div>
            </main>
        </Layout>
    )
}
