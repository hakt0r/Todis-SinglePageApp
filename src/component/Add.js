import React, { useState } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { MdAdd } from "react-icons/md";

export default function Add(props) {
    const [ value, setValue ] = useState('');
    function add(){
        props.addTodo(value);
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
        </tr>
    )
}
