// src/components/Sidebar.js
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState(null);

    return (
        <Nav defaultActiveKey="/home" className="flex-column p-3 h-100 fw-bold" style={{backgroundColor: '#363740', minHeight: 'auto'}}>
            <h2 className="text-white mb-4 text-center mb-6">Admin</h2>
            <Nav.Link 
                href="/live-calls" 
                className="d-flex align-items-center text-nowrap mb-4"
                style={{color: activeLink === '/live-calls' ? '#fff' : '#A4A6B3'}}
                onMouseEnter={() => setActiveLink('/live-calls')}
                onMouseLeave={() => setActiveLink(null)}
            >
                <img src={process.env.PUBLIC_URL + '/img/Call.svg'} alt="icon" style={{height: '20px', marginRight: '10px'}} />
                Live Calls
            </Nav.Link>
            <Nav.Link 
                href="/tutor-online" 
                className="d-flex align-items-center text-nowrap mb-4"
                style={{color: activeLink === '/tutor-online' ? '#fff' : '#A4A6B3'}}
                onMouseEnter={() => setActiveLink('/tutor-online')}
                onMouseLeave={() => setActiveLink(null)}
            >
                <img src={process.env.PUBLIC_URL + '/img/sidebar/sidebar/sidebar/list/icon/sidebar/inactive/4. contacts.svg'} alt="icon" style={{height: '20px', marginRight: '10px'}} />
                Tutor Online
            </Nav.Link>
            <Nav.Link 
                href="/active-subscription" 
                className="d-flex align-items-center text-nowrap mb-4"
                style={{color: activeLink === '/active-subscription' ? '#fff' : '#A4A6B3'}}
                onMouseEnter={() => setActiveLink('/active-subscription')}
                onMouseLeave={() => setActiveLink(null)}
            >
                <img src={process.env.PUBLIC_URL + '/img/sidebar/sidebar/sidebar/list/icon/sidebar/inactive/3. ideas.svg'} alt="icon" style={{height: '20px', marginRight: '10px'}} />
                Active Subscription
            </Nav.Link>
            <Nav.Link 
                href="/earning-spending" 
                className="d-flex align-items-center text-nowrap mb-4"
                style={{color: activeLink === '/earning-spending' ? '#fff' : '#A4A6B3'}}
                onMouseEnter={() => setActiveLink('/earning-spending')}
                onMouseLeave={() => setActiveLink(null)}
            >
                <img src={process.env.PUBLIC_URL + '/img/sidebar/sidebar/sidebar/list/Iconly/Light-Outline/Activity.svg'} alt="icon" style={{height: '20px', marginRight: '10px'}} />
                Earning/Spending
            </Nav.Link>
        </Nav>
    );
}

export default Sidebar;
