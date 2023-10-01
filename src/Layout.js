// src/components/Layout.js
import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';

const Layout = ({ username, children }) => {
    return (
        <div className="d-flex" style={{height: 'auto'}}>
            <div style={{width: '255px', backgroundColor: '#363740'}}>
                <Sidebar />
            </div>
            <div className="w-100">
                <Header username={username} />
                <div className="body-content" style={{backgroundColor: '#EAECF0', minHeight: '100vh'}}>{children}</div>
            </div>
        </div>
    );
}

export default Layout;
