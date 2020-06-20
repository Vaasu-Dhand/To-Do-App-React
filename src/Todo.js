import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  //DeStructured todos object so, now we can simply use it like todos.propertyName, instead pf this.props.todos.propertyName
	console.log((todos.length));
  const todoList = (todos.length) ? (
		
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}	//Did this for not firing the function immediately
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left, YAY</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
