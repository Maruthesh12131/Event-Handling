import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../Css/registerPage.css"
const Register = () =>{
    const {eventId} = useParams();
    const[ticket,setTicket] = useState({
        personName: '',
        personAge: 0
    });
    const navigate = useNavigate();
    const handleChange = (e) =>{
        setTicket({...ticket,[e.target.name]:e.target.value});
    }
    const handleSubmit =()=>{
        axios.post(`http://localhost:9110/bookTicket/${eventId}`,ticket).
        then(res =>{alert("Success");
            navigate("/");
        },[eventId]).catch(err=>console.log(err));
    }
    return(
        <div>
            <div className="register-event-page">
                <label>Name: </label>
                <input type="text" value = {ticket.personName} name = "personName" onChange={handleChange}/>
                <label> Age: </label>
                <input type= "number" value = {ticket.personAge} name="personAge" onChange={handleChange}/>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );

}
export default Register;