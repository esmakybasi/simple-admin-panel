// src/components/SummaryCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

const SummaryCard = ({ title, value }) => {
    return (
        <Card style={{ flex: 1, height: '100px', margin: '10px' }}> {/* width özelliğini kaldırdık ve flex: 1 ekledik */}
            <Card.Body>
                <Card.Title style={{ fontSize: '14px', color:'#8A92A6' }}>{title}</Card.Title> 
                <Card.Text>{value}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default SummaryCard;
