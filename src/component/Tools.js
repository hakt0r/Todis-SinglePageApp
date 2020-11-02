
import React, { useContext } from 'react';

import { Badge, Dropdown }  from 'react-bootstrap';

import {
  MdDelete, MdEdit
} from 'react-icons/md';

import {
  STATUS_ICONS,
  STATUS_TEXT,
  STATUS_VARIANT,
  PENDING,
  INPROGRESS,
  DONE
} from '../Model';

import { TodoContext } from '../Model';

export default function Tools({todo, setEdit}) {
  const Todo = useContext(TodoContext);
  return (
    <Dropdown>

      <Dropdown.Toggle variant={STATUS_VARIANT[todo.status]}>
        {STATUS_ICONS[todo.status]}
      </Dropdown.Toggle>

      <Dropdown.Menu>

        <Dropdown.Item onClick={e => Todo.set(todo.date, PENDING)}>
          <Badge variant={STATUS_VARIANT[PENDING]}>
            {STATUS_ICONS[PENDING]}
          </Badge> {STATUS_TEXT[PENDING]}
        </Dropdown.Item>

        <Dropdown.Item onClick={e => Todo.set(todo.date, INPROGRESS)}>
          <Badge variant={STATUS_VARIANT[INPROGRESS]}>
            {STATUS_ICONS[INPROGRESS]}
          </Badge> {STATUS_TEXT[INPROGRESS]}
        </Dropdown.Item>

        <Dropdown.Item onClick={e => Todo.set(todo.date, DONE)}>
          <Badge variant={STATUS_VARIANT[DONE]}>
            {STATUS_ICONS[DONE]}
          </Badge> {STATUS_TEXT[DONE]}
        </Dropdown.Item>

        <Dropdown.Divider />

        <Dropdown.Item onClick={e => setEdit(true)}>
          <Badge variant="primary">
            <MdEdit />
          </Badge> Edit
          </Dropdown.Item>

        <Dropdown.Item onClick={e => Todo.delete(todo.date)}>
          <Badge variant="danger">
            <MdDelete />
          </Badge> Delete
          </Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown> );
}
