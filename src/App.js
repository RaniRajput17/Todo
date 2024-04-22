import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Component/Todo';
import TodoList from './Component/TodoList';

function App() {
  const [list, setList] = useState([]);

  const addList = (value) => {
    if (value !== '') {
      setList([...list, value]);
    }
  };

  const deleteItem = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div className="App">
      <h1>TodoList</h1>
      <Todo addList={addList} />
      <hr />
      {list.map((listItem, i) => (
        <TodoList key={i} index={i} item={listItem} deleteItem={deleteItem} />
      ))}
    </div>
  );
}

export default App;
