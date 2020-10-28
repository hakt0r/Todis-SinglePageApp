
import React, { useState } from 'react';
import moment from 'moment';

import {
    STATUS_ICONS,
    STATUS_TEXT,
    STATUS_VARIANT,
    PENDING,
    INPROGRESS,
    DONE
} from '../Model';

import { Badge, Dropdown } from 'react-bootstrap';

import Edit from './Edit';
import { MdDelete, MdEdit } from 'react-icons/md';

export default function View(props) {
    const [ edit, setEdit ] = useState(false);
    const [ view, setView ] = useState(false);
    const todo = props.todo;
    let content = todo.content;
    let expand  = null; 
    if ( content.length > 300 ){
        content = view ? content : todo.content.slice(0,256);
        expand = <Badge
            onClick={e => setView(!view)}
            variant="dark"
        >{ view ? "less" : "more" }</Badge>
    }
    if ( edit ) return <Edit {...props} setEdit={setEdit} />;
    return (
        <tr>
            <td>
                <Dropdown>
                    <Dropdown.Toggle variant={STATUS_VARIANT[todo.status]}>
                        {STATUS_ICONS[todo.status]}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                            <Dropdown.Item onClick={e => props.toggleTodo(todo.date,PENDING)}>
                                <Badge variant={STATUS_VARIANT[PENDING]}>
                                    {STATUS_ICONS[PENDING]}
                                </Badge> {STATUS_TEXT[PENDING]}
                            </Dropdown.Item>

                            <Dropdown.Item onClick={e => props.toggleTodo(todo.date,INPROGRESS)}>
                                <Badge variant={STATUS_VARIANT[INPROGRESS]}>
                                    {STATUS_ICONS[INPROGRESS]}
                                </Badge> {STATUS_TEXT[INPROGRESS]}
                            </Dropdown.Item>

                            <Dropdown.Item onClick={e => props.toggleTodo(todo.date,DONE)}>
                                <Badge variant={STATUS_VARIANT[DONE]}>
                                    {STATUS_ICONS[DONE]}
                                </Badge> {STATUS_TEXT[DONE]}
                            </Dropdown.Item>


                            <Dropdown.Divider/>

                            <Dropdown.Item onClick={ e => setEdit(true) }>
                                <Badge variant="primary">
                                    <MdEdit/>
                                </Badge> Edit
                            </Dropdown.Item>

                            <Dropdown.Item onClick={ e => props.deleteTodo(todo.date) }>
                                <Badge variant="danger">
                                    <MdDelete/>
                                </Badge> Delete
                            </Dropdown.Item>

                        </Dropdown.Menu>
                </Dropdown>
            </td>
            <td>
                {content}<br/>
                <Badge variant="primary">{moment(todo.date).fromNow()}</Badge>
                &nbsp;
                {expand}
            </td>
        </tr>
    )
}
