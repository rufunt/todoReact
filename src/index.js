import React from 'react';
import ReactDom from 'react-dom';

const TodoList = () => {
  return (
    <ul>
      <li>ToDo 1</li>
      <li>todo 2</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>Todo Items</h1>;
};

const SearchPanel = () => {
  return (
    <input placeholder='search' />
  );
};

const el = (
  <div>
    <AppHeader />
    <SearchPanel />
    <TodoList /> 
  </div>
);

ReactDom.render(el, document.getElementById('root'));