import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../Css/newFormPage.css";

const AddEvent = () =>{
    const {eventId} = useParams();
    const[newEvent , setNewEvent] = useState(
        {
        eventName: '',
        location:'',
        eventDate:'',
        eventStartTime:'',
        eventEndTime:'',
        eventDescription:'',
        eventTotalTicket:0,
        ticketPrice:0
    });
    const navigate = useNavigate();
    useEffect(()=>{
        if(eventId!==undefined){
            
            axios.get(`http://localhost:9110/getEventDetails/${eventId}`).then(res=>setNewEvent(res.data)).catch(err=>console.log(err));
        }
    },[eventId]);
    const handleChange = (e) =>{
        setNewEvent({...newEvent,[e.target.name]:e.target.value});
    }
    const handleSubmit= (e) =>{
        e.preventDefault();
        if(eventId){
            axios.put(`http://localhost:9110/updateEvent/${eventId}`,newEvent).then(()=>navigate('/')).catch(err=>console.log(err));
        }
        else{
            axios.post(`http://localhost:9110/postEvent`,newEvent).then(()=> navigate('/')).catch(err => console.log(err));
        }
        
    }
    return(
        <div>
            <div className="newFormPage">
                <h2>{eventId?"Update Event":"Add Event"}</h2>
            <form onSubmit={handleSubmit}>

                <label>Event Name: </label>
                <input type="text" name ="eventName" placeholder="Event Name"  value={newEvent.eventName} onChange={handleChange}/>
                <label>Event Location</label>
                <input type = "text" name="location" placeholder="Event Location" value={newEvent.location} onChange={handleChange} />
                <label>Event Date</label>
                <input type = "date" name="eventDate" value={newEvent.eventDate} onChange={handleChange} />
                <label>Event Start Time</label>
                <input type="time" name="eventStartTime" value={newEvent.eventStartTime} onChange={handleChange} />
                <label>Event End Time</label>
                <input type ="time" name="eventEndTime" value={newEvent.eventEndTime} onChange={handleChange} />
                <label>Total Tickets</label>
                <input type="number" name="eventTotalTicket" placeholder="TotalTickets" value={newEvent.eventTotalTicket} onChange={handleChange} />
                <label>Ticket Price</label>
                <input type="number" name="ticketPrice" placeholder="Amount" value={newEvent.ticketPrice} onChange={handleChange} />
                <label>Description</label>
                <input type="text" name="eventDescription" placeholder="Description" value={newEvent.eventDescription} onChange={handleChange} ></input>
                <button type="submit">{eventId?"Update Event":"Submit"}</button>
            </form>
            </div>
        </div>
    );
}
export default AddEvent;