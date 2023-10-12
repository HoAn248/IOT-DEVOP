import './App.css';
import HomePage from './components/HomePage/HomePage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Signin from './components/Signin/Signin';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Signup from './components/Signup/Signup';
import InforSV from './components/InforSV/InforSV';
import AdminPage from './components/Admin/AdminPage/AdminPage';
import Lop from './components/Admin/Lop/Lop';
import MonHoc from './components/Admin/MonHoc/MonHoc';
import SinhVien from './components/Admin/SinhVien/SinhVien';
import ViewSinhVien from './components/Admin/CRUDSinhVien/ViewSinhVien/ViewSinhVien';
import UpdateSinhVien from './components/Admin/CRUDSinhVien/UpdateSinhVien/UpdateSinhVien';
import DeleteSinhVien from './components/Admin/CRUDSinhVien/DeleteSinhVien/DeleteSinhVien';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/infor' element={<InforSV/>} />
        <Route path='/admin' element={<AdminPage/>} />
        <Route path='/admin/lop' element={<Lop/>} />
        <Route path='/admin/monhoc' element={<MonHoc/>} />
        <Route path='/admin/sinhvien' element={<SinhVien/>} />
        <Route path='/admin/sinhvien/lop' element={<SinhVien/>} />
        <Route path='/admin/sinhvien/:id' element={<ViewSinhVien/>} />
        <Route path='/admin/sinhvien/update/:id' element={<UpdateSinhVien/>} />
        <Route path='/admin/sinhvien/delete/:id' element={<DeleteSinhVien/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </>

  );
}

export default App;
