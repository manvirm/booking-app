//import './App.css';
import React from 'react'
import Header from './components/Header'
import Bookings from './components/Bookings'
import AddBooking from './components/AddBooking'
import { useState } from 'react'
function App() {

const [showAddBooking, setShowAddBooking] = useState(false)
const [bookings, setBookings] = useState([])

//Add Booking
const addBooking = (booking) => {
  const id = Math.floor(Math.random() *10000) +1
  const newBooking = {id, ...booking}
  setBookings([...bookings, newBooking])
}

  //Delete Booking
const deleteBooking = (id) => {
  setBookings(bookings.filter((booking) => booking.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setBookings(bookings.map((booking) => booking.id === id ? {...booking, reminder: 
  !booking.reminder} : booking))
}
  //can only return a single element, 
  //every other element has to go inside of it
  return (
    <div className='container'>
      <Header onAdd={() => setShowAddBooking(!showAddBooking)} 
      showAdd={showAddBooking}/>
      {showAddBooking && <AddBooking onAdd={addBooking}/>}
      {bookings.length > 0 ? (
        <Bookings bookings={bookings} onDelete={deleteBooking}  
        onToggle={toggleReminder}/>
      ) : (
        'No Bookings To Show'
      )}
      
    </div>
  );
}




export default App;
