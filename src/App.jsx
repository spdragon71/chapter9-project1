import { useState } from 'react'

import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodolistItems from './components/TodolistItems';
import TodoProgress from './components/TodoProgress';

import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const handleCreate = (value) => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        text: value,
        isCompleted: false,
      },
    ]);
  }

  const handleToggle = (id) => {
    const nextTodos = todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      } else {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        }
      }
    })

    setTodos(nextTodos);
  }

  const handleDelete = (id) => {
    const nextTodos = todos.filter((todo) => {
      if (todo.id !== id) {
        return true;
      } else {
        return false;
      }
    })

    setTodos(nextTodos);
  }

  return (
    <div className='todolistContainer'>
      <Header />
      <TodoInput onCreate={handleCreate} />
      <TodolistItems todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
      <TodoProgress todos={todos} />
    </div>
  )
}

export default App
