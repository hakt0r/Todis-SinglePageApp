
import React, { useState } from 'react';

import { Badge }  from 'react-bootstrap';

import moment from 'moment';

import Edit  from './Edit';
import Tools from './Tools';

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

    if ( edit ) return <Edit todo={todo} setEdit={setEdit} />;

    return (
        <tr>
            <td><Tools todo={todo} setEdit={setEdit}/></td>
            <td>
                {content}<br/>
                <Badge variant="primary">
                    {moment(todo.date).fromNow()}
                </Badge>
                &nbsp;
                {expand}
            </td>
        </tr>
    );
}
