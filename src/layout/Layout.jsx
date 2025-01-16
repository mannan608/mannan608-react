import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className=''>
            <Header />
            <main className='main-content'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout