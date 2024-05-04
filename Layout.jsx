import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from "./src/components/Header"
import Footer from './src/components/Footer'
function Layout() {
    return (
        <>
            <div >
                <Header />
                <div className='w-[80%] m-auto'>
                <Outlet />
                </div>  
                <Footer />
            </div>

        </>
    )
}

export default Layout