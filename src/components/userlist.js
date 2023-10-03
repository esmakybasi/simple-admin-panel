// src/components/UserList.js
import React from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import SummaryCard from './summaryCard';
import FilterBar from './FilterBar';

const users = [
    { id: 1, learners: 'Learner 1', language: 'English', occupation: 'Developer', objective: 'Learning React', subscription: 'Premium' },
    { id: 2, learners: 'Learner 2', language: 'Spanish', occupation: 'Designer', objective: 'Learning Vue', subscription: 'Free' },
    { id: 3, learners: 'Learner 1', language: 'English', occupation: 'Developer', objective: 'Learning React', subscription: 'Premium' },
    { id: 4, learners: 'Learner 1', language: 'English', occupation: 'Developer', objective: 'Learning React', subscription: 'Premium' },
    { id: 5, learners: 'Learner 1', language: 'English', occupation: 'Developer', objective: 'Learning React', subscription: 'Premium' },
];

const UserList = () => {
    const totalSales = 560000;

    return (
        <Container style={{ paddingTop: "50px",width: '1000px', height: '700px' }}>
            <Row style={{ width: '1000px',marginBottom: '20px' }}>
                <SummaryCard title="Total Sales" value={`$${totalSales/1000}K`} percentage={50} style={{ flex: 1 }}/>
                <SummaryCard title="Total Sales" value={`$${totalSales/1000}K`} style={{ flex: 1 }}/>
                <SummaryCard title="Total Sales" value={`$${totalSales/1000}K`} style={{ flex: 1 }}/>
                <SummaryCard title="Total Sales" value={`$${totalSales/1000}K`} style={{ flex: 1 }}/>
            </Row>

            <FilterBar />

            <div style={{ borderRadius:'7px', overflowX:'hidden', backgroundColor:'#fff'}}>
                <div>
                    <div style={{ display:'flex' , backgroundColor:'#F7F8FC', height: '70px', alignItems: 'center'}}>
                        <div style={{ flexBasis: '20%', padding: '0.75rem', display: 'flex', justifyContent: 'center' }}>
                            <Form.Check style={{ marginRight: '10px' }} />
                            Learners
                        </div>
                        <div style={{ flexBasis: '20%', padding: '0.75rem' }}>Language</div>
                        <div style={{ flexBasis: '20%', padding: '0.75rem' }}>Occupation</div>
                        <div style={{ flexBasis: '20%', padding: '0.75rem' }}>Objective</div>
                        <div style={{ flexBasis: '20%', padding: '0.75rem' }}>Subscription</div>
                    </div>
                    {users.map(user => (
                        <div key={user.id} style={{ display:'flex', borderBottom:'1px solid #dee2e6', height: '80px', alignItems: 'center' }}>
                            <div style={{ flexBasis: '20%', padding: '0.75rem', display: 'flex', justifyContent: 'center' }}>
                                <Form.Check style={{ marginRight: '10px' }} />
                                {user.learners}
                            </div>
                            <div style={{ flexBasis: '20%', padding: '0.75rem' }}>{user.language}</div>
                            <div style={{ flexBasis: '20%', padding: '0.75rem' }}>{user.occupation}</div>
                            <div style={{ flexBasis: '20%', padding: '0.75rem' }}>{user.objective}</div>
                            <div style={{ flexBasis: '20%', padding: '0.75rem' }}>{user.subscription}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default UserList;
