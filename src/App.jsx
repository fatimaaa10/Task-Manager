import React, { useState, useEffect } from 'react'

import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, [])

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  return (
    <>
      <div className='App'>
        <h1 className='title'>Task Manager</h1>
        <TaskForm addTask={addTask} />
        <TaskList 
          tasks={tasks} 
          toggleTaskCompletion={toggleTaskCompletion} 
          deleteTask={deleteTask} 
        />
      </div>
    </>
  )
}

export default App
