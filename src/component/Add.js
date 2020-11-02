
import React, { useState, useContext } from 'react';

import { MdAdd } from "react-icons/md";

import {
    Button, FormControl, InputGroup
} from 'react-bootstrap';

import { TodoContext } from '../Model';

export default function Add() {
    const Todo = useContext(TodoContext);

    const [ value, setValue ] = useState('');

    function add(){
        Todo.add(value);
        setValue('');
    }

    return (
    <tr>
        <th colSpan={2}>
            <InputGroup>
                <FormControl
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onKeyPress={ e => { if ( e.key === "Enter" ) add() } }
                    />
                <InputGroup.Append>
                    <Button onClick={add}>
                        <MdAdd/>
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </th>
    </tr> );
}
