
import React, { useState } from 'react';

import {
    MdSave, MdCancel
} from 'react-icons/md';

import {
    FormControl, Button, InputGroup
} from 'react-bootstrap';

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
        <td colSpan={2}>
            <InputGroup>
                <FormControl
                    value={value}
                    onChange={ e => setValue(e.target.value) }
                />
                <InputGroup.Append>
                    <Button title="Save" onClick={save}>
                        <MdSave/>
                    </Button>
                    <Button
                        title="Cancel" onClick={cancel}
                        variant="danger"
                    ><MdCancel/></Button>
                </InputGroup.Append>
            </InputGroup>
        </td>
    </tr> );
}
