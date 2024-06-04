import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from "./src/components/Header"
import Footer from './src/components/Footer'
import Whatsapp from '@/components/Whatsapp'
function Layout() {
    return (
        <>
            <div >
                <Header />
                <Outlet />
                <Whatsapp />
                <Footer />
            </div>

        </>
    )
}

export default Layout