import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";
const todos = [
  {
    id: 1,
    text: "学习react",
    completed: true
  },
  {
    id: 3,
    text: "学习vue",
    completed: true
  },
  {
    id: 3,
    text: "学习typescript",
    completed: true
  }
];
class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList todos={todos} />
        <Footer />
      </div>
    );
  }
}
export default App;
