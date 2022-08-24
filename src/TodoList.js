/**
 * @description The TodoList component.
 */
import React, { useState } from "react";

export const TodoList = function (props) {
  const [todos, setTodos] = useState([])
  const [todoNameValue, setTodoNameValue] = useState('hello')

  const handleChangeTodoName = (event) => {
    const value = event.target.value
    setTodoNameValue(value)
  }

  const handleClickAddTodo = () => {
    const newTodo = {
      id: new Date().getTime(),
      name: todoNameValue
    }

    setTodos([
      ...todos,
      newTodo
    ])

    setTodoNameValue('')
  }

  return (
    <div className="">
      <div>
        <input type="text" value={todoNameValue} onChange={handleChangeTodoName} />
        <button onClick={handleClickAddTodo}>Add todo</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
};
