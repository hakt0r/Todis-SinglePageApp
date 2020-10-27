import React, { useState } from 'react'
import { Button, Form, FormControl, Table } from 'react-bootstrap';
import Add from './Add';
import View from './View';

export default function List(props) {
    const [value, setValue] = useState('');
    const state = props.state;
    return (
        <Table striped bordered hover>
        <thead>
            <Add {...props}/>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            { state.list.map( todo =>
                <View {...props} todo={todo}/>
            )}
        </tbody>
    </Table> )
}
