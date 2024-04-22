import React from 'react';

function TodoList(props) {
  return (
    <li
      style={{
        listStyle: 'none',
        width: '350px',
        backgroundColor: '#b4b4b4',
        marginLeft: '530px',
        marginTop: '12px',
        padding: '24px'
      }}
    >
      {props.item}
      <button
        onClick={() => {
          props.deleteItem(props.index);
        }}
        style={{
          position: 'absolute',
          left: '60%',
          width: '90px',
          height: '40px',
          marginLeft: '12px',
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '15px',
          borderStyle: 'none',
          fontSize: '19px'
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoList;
