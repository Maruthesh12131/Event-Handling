import { useEffect, useState } from "react"
import axios from "axios";
import '../Css/homepagetable.css';
import { useNavigate } from "react-router-dom";
const HomePage = () =>{
    const [events,setEvents] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:9110/showEvents').then(res => setEvents(res.data)).catch(err => console.log(err));
    },[]);
    const navigate = useNavigate();
    const handleButton = () =>{
        navigate(`/AddEvent`);
    }
    const handleDelete = (eventId) =>{
        axios.delete(`http://localhost:9110/deleteEvent/${eventId}`).then(()=> {setEvents(prevEvents =>prevEvents.filter(e => e.eventId!==eventId))}).catch(err =>console.log(err));
    }
    

    const handleUpdate = (eventId) =>{
        navigate(`/AddEvent/${eventId}`);
    }
    const handleRegister = (eventId) =>{
        navigate(`/Register/${eventId}`);
    }
    return(<div className="home-add-event">
        <div className="home-new-event">
            <label>Add New Events</label>
            <button type="button" onClick ={handleButton}>New Event</button>
        </div>
        <div>
            <label>UpComing or Ongoing Events</label>
                <div className="home-table">
                    <table>
                        <thead>
                            <tr>
                            <th>Event Id</th>
                            <th>Event Name</th>
                            <th>Event Location</th>
                            <th>Event Date</th>
                            <th>Event StartTime</th>
                            <th>Event EndTime</th>
                            <th>Update Event </th>
                            <th>Delete Event </th>
                            <th>Register Event</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.length>0? 
                            (events.map((e) => 
                                (<tr key={e.id}>
                                    <td>{e.eventId}</td>
                                    <td>{e.eventName}</td>
                                    <td>{e.location}</td>
                                    <td>{e.eventDate}</td>
                                    <td>{e.eventStartTime}</td>
                                    <td>{e.eventEndTime}</td>
                                    <td><button onClick={()=>{handleUpdate(e.eventId)}}>Update</button></td>
                                    <td><button onClick={()=>{handleDelete(e.eventId)}}>Delete</button></td>
                                    <td><button onClick={()=>{handleRegister(e.eventId)}}>Register</button></td>
                                </tr>
                            ))):(
                                <tr> 
                                    <td> 0 </td>
                                    <td> xyz </td>
                                    <td> abc </td>
                                    <td> 00/00/00 </td>
                                    <td> 00:00:00 </td>
                                    <td> 00:00:00 </td>
                                    </tr>
                            )}
                            
                        </tbody>
                    </table>
                </div> 
            </div>
    </div>
    );
}
export default HomePage;