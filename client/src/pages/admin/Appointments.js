import React,{useEffect,useState} from "react";
import axios from "axios";
import AdminLayout from "../../components/AdminLayout";
import "../../styles/admin.css";

function Appointments(){

const [appointments,setAppointments]=useState([]);

const getAppointments = async()=>{

const res = await axios.get("/api/admin/appointments",{
headers:{
Authorization:"Bearer "+localStorage.getItem("token")
}
});

setAppointments(res.data.data);

};

useEffect(()=>{
getAppointments();
},[]);

const updateStatus = async(id,status)=>{

await axios.post(
"/api/admin/update-appointment",
{
id,
status
},
{
headers:{
Authorization:"Bearer "+localStorage.getItem("token")
}
}
);

getAppointments();

};

return(

<AdminLayout>

<h2>Appointments</h2>

<table className="admin-table">

<thead>
<tr>
<th>Patient</th>
<th>Doctor</th>
<th>Date</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{appointments.map((a)=>(

<tr key={a._id}>

<td>{a.userInfo?.name || "Unknown"}</td>
<td>{a.doctorInfo?.name || "Unknown"}</td>
<td>{a.date}</td>

<td>
<span className="badge">
{a.status}
</span>
</td>

<td>

<button
className="approve-btn"
onClick={()=>updateStatus(a._id,"approved")}
>
Approve
</button>

<button
className="reject-btn"
onClick={()=>updateStatus(a._id,"rejected")}
>
Reject
</button>

</td>

</tr>

))}

</tbody>

</table>

</AdminLayout>

);
}

export default Appointments;