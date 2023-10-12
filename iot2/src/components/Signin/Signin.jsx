import React from 'react'
import style from './signin.module.css'
import { Link } from 'react-router-dom'
export default function Signin() {
    return (
        <div className={style.login_page} >
            <div className={style.form}>
                <form className={style.login_form}>
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button>login</button>
                    <p className={style.message}><Link to="/" rel="noopener noreferrer">Home Page</Link></p>
                    <p className={style.message}>Not registered?<Link to="/signup" rel="noopener noreferrer">Create an account</Link></p>
                </form>
            </div>
        </div>
    )
}
