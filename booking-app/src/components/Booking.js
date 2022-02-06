//import font awesome
import {FaTimes} from 'react-icons/fa'
import moment from 'moment-js'
const Booking = ({booking, onDelete, onToggle}) => {
const num = 1  
  return(
    
    <div className={`booking ${booking.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(booking.id)}>
     <h3>Date: {moment(booking.selectedDate).format("YYYY-MM-DD")}{' '} <FaTimes style={{color: 'red', cursor: 'pointer'}} 
     onClick={() => onDelete(booking.id)}/> </h3>
     <p>Time: {booking.time}</p>
     {booking.hours*1 === num ? <p>Hour: {booking.hours}</p> : <p>Hours: {booking.hours}</p>}

     {booking.selectedDate.getDay() === 0 || booking.selectedDate.getDay() === 6 ? <p>Price: ${150*booking.hours} ($150/hr)</p> : 
     <p>Price: ${100*booking.hours} ($100/hr)</p>}
   </div>
  
  
  )
};

export default Booking
