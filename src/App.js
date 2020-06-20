import React from "react";
import Todo from "./Todo";
import AddForm from "./AddForm"

class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario cart" },
      { id: 3, content: "Hi Jim Halpert" },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      //Returns TRUE, if we want to keep that item in the array 
      //and   FALSE, if we want to remove it
      return todo.id !== id  
    });
    this.setState({
      todos: todos
    })
  }
s
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render() {
    return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
      <AddForm addTodo = {this.addTodo}/>
    </div>
    );
  }
}

export default App;