import logo from './logo.svg';
import './App.css';
import AdminLayout from './pages/admin/shared/admin/AdminLlayout';
import Layout from './pages/store/shared/Layout';
import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
    <Suspense>
      <Routes>
        {/* <Route exact path="/login" name="Login Page" element={<Login />} />
        <Route exact path="/register" name="Register Page" element={<Register />} />
        <Route exact path="/404" name="Page 404" element={<Page404 />} />
        <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
        <Route exact path="*" name="Store" element={<Layout/>} />
        <Route exact path="/admin/*" name="Pepe" element={<AdminLayout />} />

      </Routes>
    </Suspense>
  </HashRouter>
  );
}

export default App;
