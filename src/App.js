import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from "react";

function App() {
  // Retrieve todos from localStorage or set an empty array
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(storedTodos);

  useEffect(() => {
    // Update localStorage whenever todos change
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, desc) => {
    console.log("adding a todo", title, desc);
    const sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const onDelete = (todo) => {
    console.log("deleting todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
