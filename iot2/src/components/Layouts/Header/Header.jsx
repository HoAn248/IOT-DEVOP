import React from 'react'
import style from './header.module.css'
import { Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className={style.header}>
        <div className={style.logo}>
            <img src="/images/logo.png" alt=""></img>
        </div>
        <ul>
        <li><Link to="/admin" rel="noopener noreferrer">Admin</Link></li>
            <li><Link to="/" rel="noopener noreferrer">Trang chủ</Link></li>
            <li><Link to="/infor" rel="noopener noreferrer">Thông tin sinh viên</Link></li>
            {/* <li><Link to="/" rel="noopener noreferrer">Thông báo điểm danh</Link></li> */}
            <li><Link to="/signin" rel="noopener noreferrer">Đăng nhập</Link></li>
            <li><Link to="/signup" rel="noopener noreferrer">Đăng kí</Link></li>
        </ul>
    </header>
  )
}
