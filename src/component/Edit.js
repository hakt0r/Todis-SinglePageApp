
import React, { useState } from 'react';
import moment from 'moment';

import {
    STATUS_TEXT
} from '../Model';
import { FormControl, Button, ButtonGroup } from 'react-bootstrap';

export default function Edit(props) {
    const todo = props.todo;
    const [ value, setValue ] = useState(todo.content);
    function save(){
        props.changeTodo(todo.date,value);
        props.setEdit(false);
    }
    function cancel (){
        props.setEdit(false);
    }
    return (
        <tr>
            <td>{moment(todo.date).fromNow()}</td>
            <td>
                <FormControl
                    value={value}
                    onChange={ e => setValue(e.target.value) }
                />
            </td>
            <td>{STATUS_TEXT[todo.status]}</td>
            <td>
                <ButtonGroup>
                    <Button onClick={save}>Save</Button>
                    <Button onClick={cancel} variant="danger">Cancel</Button>
                </ButtonGroup>
            </td>
        </tr>
    )
}
