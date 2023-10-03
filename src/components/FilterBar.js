// src/components/FilterBar.js
import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

const FilterBar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ backgroundColor: '#fff', padding: '5px 10px', borderRadius: '5px', width: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fas fa-filter" style={{ marginRight: '5px' }}></i> Filters
                </div>
                <div style={{ backgroundColor: '#000AFF', color: '#fff', padding: '3px 8px', borderRadius: '5px', width: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fas fa-plus" style={{ marginRight: '5px' }}></i> Add User
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>1 Row Selected</div>
            </div>
            <Form inline className="ml-auto">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ borderRadius: '5px' }} />
            </Form>
        </div>
    );
}

export default FilterBar;
