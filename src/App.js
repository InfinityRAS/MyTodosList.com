import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState, useEffect } from 'react';
import { AddTodo } from "./MyComponents/AddTodo";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { About } from "./MyComponents/About";
import { NotFound } from "./notFound";
import LoadingBar from 'react-top-loading-bar'

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I'm adding todo")
    let sno;

    if (todos.length === 0) {
      sno = 1
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const [progress, setProgress] = useState(0)

  return (
    <>
      <Router>
        <div>
          <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
        </div>
        <Header title="MyTodoList.com" searchBar={true} setProgress={setProgress} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route>
            <NotFound />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
