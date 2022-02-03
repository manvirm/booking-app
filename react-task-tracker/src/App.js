//import './App.css';
import React from 'react'
import Header from './components/Header'
import { useState } from 'react'
function App() {


  //Delete Task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
  //can only return a single element, 
  //every other element has to go inside of it
  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No Tasks To Show'
      )}
      
    </div>
  );
}



export default App;
