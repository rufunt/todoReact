import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = (props) => {
    
    return (
      <ul>
        <li><TodoListItem label="Todo 1"/></li>
        <li><TodoListItem label="Todo 2" important/></li>
      </ul>
    );
};

export default TodoList;  