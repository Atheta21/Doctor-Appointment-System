import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../../components/AdminLayout";
import AddDoctorForm from "./AddDoctorForm";
import "../../styles/admin.css";

function AdminDoctors() {

const [doctors,setDoctors] = useState([]);
const [showForm,setShowForm] = useState(false);

const getDoctors = async () => {

const res = await axios.get("/api/admin/doctors",{
headers:{
Authorization:"Bearer "+localStorage.getItem("token")
}
});

setDoctors(res.data.data);
};

useEffect(()=>{
getDoctors();
},[]);

const toggleStatus = async(id,status)=>{

await axios.post("/api/admin/toggle-doctor",
{
doctorId:id,
status:status
},
{
headers:{
Authorization:"Bearer "+localStorage.getItem("token")
}
}
);

getDoctors();
};

return (

<AdminLayout>

<div className="page-header">

<h2>Doctors</h2>

<button 
className="add-btn"
onClick={()=>setShowForm(true)}
>
Add Doctor
</button>

</div>

{showForm && 
<AddDoctorForm 
close={()=>setShowForm(false)} 
refresh={getDoctors}
/>
}

<table className="admin-table">

<thead>
<tr>
<th>Name</th>
<th>Specialization</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{doctors.map((doc)=>(

<tr key={doc._id}>

<td>{doc.name}</td>
<td>{doc.specialization}</td>

<td>
<span className={doc.status==="available"?"badge green":"badge red"}>
{doc.status}
</span>
</td>

<td>

<button
className="toggle-btn"
onClick={()=>toggleStatus(doc._id,doc.status)}
>
{doc.status==="available"?"Make Busy":"Make Available"}
</button>

</td>

</tr>

))}

</tbody>

</table>

</AdminLayout>

);
}

export default AdminDoctors;