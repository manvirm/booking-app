import {useState} from 'react'
import DatePicker from 'react-date-picker'
//import 'react-datepicker/dist/react-datepicker.css'

const AddTask = ({ onAdd }) => {
    const [time, setTime] = useState('')
    const [hours, setHours] = useState('')
    const [reminder, setReminder] = useState(false)
    const [selectedDate, setSelectedDate] = useState(null)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!selectedDate) {
            alert('Please select a date')
            return
        }
        

        onAdd({ time, hours, reminder, selectedDate })

        setTime('')
        setHours('')
        setReminder(false)
        setSelectedDate(null)
    }
  return(
      <form className='add-form' onSubmit={onSubmit}>
          <div className='form-control'>
              <label>Date of Booking</label>
              
              <DatePicker value = {selectedDate}  onChange={date => setSelectedDate(date)} 
              dateFormat='yyyy/MM/dd'
              minDate = {new Date()}/>
          </div>
          <div className='form-control'>
              <label>Time</label>
              <input type='time' placeholder='Add Time' value={time}
              onChange={(e) => setTime(e.target.value)}></input>
          </div>
          <div className='form-control'>
              <label>Number of Hours:</label>
              <input type='number' placeholder='Add Hours' value={hours}
              onChange={(e) => setHours(e.target.value)}></input>
          </div>
          <div className='form-control form-control-check'>
              <label>Set Reminder</label>
              <input type='checkbox'
              checked={reminder}
              value={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}></input>
          </div>
          <input type='submit' value='Save Task' className='btn btn-block' />
      </form>
  )
};


export default AddTask;
