import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../../components/AdminLayout";
import "../../styles/admin.css";

function AdminDashboard() {

const [data,setData] = useState({
users:0,
doctors:0,
appointments:0,
earnings:0
});

const getData = async () => {

try{

const token = localStorage.getItem("token");

if(!token) return;

const res = await axios.get("/api/admin/dashboard",{
headers:{
Authorization:"Bearer " + token
}
});

if(res.data.success){
setData(res.data.data);
}

}catch(error){
console.log(error);
}

};

useEffect(()=>{
getData();
},[]);

return(

<AdminLayout>

<h2 className="dashboard-title">Admin Dashboard</h2>

<div className="dashboard-cards">

<div className="card patients">
<h3>{data.users}</h3>
<p>👤 Patients</p>
</div>

<div className="card doctors">
<h3>{data.doctors}</h3>
<p>🩺 Doctors</p>
</div>

<div className="card appointments">
<h3>{data.appointments}</h3>
<p>📅 Appointments</p>
</div>

<div className="card earnings">
<h3>₹{data.earnings}</h3>
<p>💰 Total Earnings</p>
</div>

</div>

</AdminLayout>

);
}

export default AdminDashboard;