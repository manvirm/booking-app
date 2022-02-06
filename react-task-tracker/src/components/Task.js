//import font awesome
import {FaTimes} from 'react-icons/fa'
import DatePicker from 'react-date-picker'
import moment from 'moment-js'
const Task = ({task, onDelete, onToggle}) => {
const num = 1  
  return(
    
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      {console.log(task.selectedDate)}
     <h3>Date: {moment(task.selectedDate).format("YYYY-MM-DD")}{' '} <FaTimes style={{color: 'red', cursor: 'pointer'}} 
     onClick={() => onDelete(task.id)}/> </h3>
     <p>Time: {task.time}</p>
     {task.hours*1 === num ? <p>Hour: {task.hours}</p> : <p>Hours: {task.hours}</p>}

     {task.selectedDate.getDay() === 0 || task.selectedDate.getDay() === 6 ? <p>Price: ${150*task.hours} ($150/hr)</p> : <p>Price: ${100*task.hours} ($100/hr)</p>}
   </div>
  
  
  )
};

export default Task
