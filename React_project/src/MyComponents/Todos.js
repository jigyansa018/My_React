import React from 'react';
import { Todoitem } from "./Todoitem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0 ? (
        "No Todos to display"
      ) : (
        props.todos.map((todo) => (
          <Todoitem 
            todo={todo} 
            key={todo.serial_no} 
            onDelete={props.onDelete} 
          />
        ))
      )}
    </div>
  );
};
