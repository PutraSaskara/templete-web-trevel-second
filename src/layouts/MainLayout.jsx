import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../hooks/useTheme';

const MainLayout = () => {
    useTheme(); // Initialize theme variables

    return (
        <div className="flex flex-col min-h-screen bg-background text-text font-sans selection:bg-primary selection:text-background">
            <Navbar />
            <main className="flex-grow pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
