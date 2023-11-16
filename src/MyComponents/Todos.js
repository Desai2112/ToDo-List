import React from 'react';
import { TodoItem } from './TodoItem';

const Todos = (props) => {
  let myStyle={
    minHeight:"35vh",
    margin: "10px auto"
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length === 0?"No Todos to Diaplay":
      props.todos.map((todo) => {
        return(
          <>
        <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} /><hr />
        </>
      )})
  }
    </div>
  );
};

export default Todos;
