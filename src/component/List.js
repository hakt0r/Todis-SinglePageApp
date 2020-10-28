import React from 'react'
import { Table } from 'react-bootstrap';
import Add from './Add';
import View from './View';

export default function List(props) {
    const state = props.state;
    return (
        <Table striped bordered hover>
        <thead>
            <Add {...props}/>
        </thead>
        <tbody>
            { state.list.map( (todo,index) =>
                <View {...props} todo={todo} key={index}/>
            )}
        </tbody>
    </Table> )
}
