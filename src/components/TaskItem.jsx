import React from 'react';

function TaskItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li>
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span>{task.text}</span>
    </li>
     
     <button className='complete' onClick={() => toggleTaskCompletion(task.id)}>
       {task.completed ? 'Undo' : 'Complete'}
     </button>
     <button className='delete' onClick={() => deleteTask(task.id)}>Delete</button>
     </li>
  );
}

export default TaskItem;
