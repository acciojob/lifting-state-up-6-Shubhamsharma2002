import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text || todo.task}</span>
            {!todo.completed ? (
              <button onClick={() => handleComplete(todo.id)}>
                Complete
              </button>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;