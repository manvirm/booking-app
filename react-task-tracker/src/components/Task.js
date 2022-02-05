//import font awesome
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
   
  return(

    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
     <h3>My Task <FaTimes style={{color: 'red', cursor: 'pointer'}} 
     onClick={() => onDelete(task.id)}/> </h3>
     <p>Day of Task</p>
   </div>
  
  
  )
};

export default Tasks
