import React, { useState } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap';

export default function Add(props) {
    const [ value, setValue ] = useState('');
    function add(){
        props.addTodo(value);
        setValue('');
    }
    return (
        <tr>
            <th colspan={4}>
                <InputGroup>
                    <FormControl
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        />
                    <InputGroup.Append>
                        <Button onClick={add}>Add</Button>
                    </InputGroup.Append>
                </InputGroup>
            </th>
        </tr>
    )
}
