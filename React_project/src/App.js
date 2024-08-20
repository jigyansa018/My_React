import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  // Load initial todos from local storage
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    // Filter out the todo to delete
    const updatedTodos = todos.filter((e) => e.sno !== todo.sno);
    setTodos(updatedTodos);
    console.log("Deleted", updatedTodos);
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    // Calculate the next serial number
    const sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;

    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
    console.log(newTodo);
  };

  return (
    <Router>
      <Header title="My Todos List" searchBar={false} />
      <Switch>
        <Route exact path="/" render={() => (
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
        )} />
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
