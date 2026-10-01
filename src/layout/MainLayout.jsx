import React from 'react';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Outlet } from 'react-router';


const MainLayout = () => {
    return (
        <div className="min-h-screen bg-[var(--bg)]">
            <Header />

            <Sidebar />

            <main className="ml-[216px] pt-[68px] min-h-screen">
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout
