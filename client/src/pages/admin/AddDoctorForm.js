import React, { useState } from "react";
import axios from "axios";
import "../../styles/admin.css";

function AddDoctorForm({ close, refresh }) {

const [form,setForm] = useState({
name:"",
specialization:"",
fees:"",
experience:""
});

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const submitDoctor = async(e)=>{
e.preventDefault();

await axios.post(
"/api/admin/add-doctor",
form,
{
headers:{
Authorization:"Bearer "+localStorage.getItem("token")
}
}
);

// refresh doctor list
refresh();

// close popup
close();
};

return (

<div className="modal">

<div className="modal-content">

<h3>Add Doctor</h3>

<form onSubmit={submitDoctor}>

<input
name="name"
placeholder="Doctor Name"
value={form.name}
onChange={handleChange}
/>

<input
name="specialization"
placeholder="Specialization"
value={form.specialization}
onChange={handleChange}
/>

<input
name="experience"
placeholder="Experience"
value={form.experience}
onChange={handleChange}
/>

<input
name="fees"
placeholder="Fees"
value={form.fees}
onChange={handleChange}
/>

<button className="submit-btn">
Add Doctor
</button>

<button
type="button"
className="close-btn"
onClick={close}
>
Cancel
</button>

</form>

</div>

</div>

);
}

export default AddDoctorForm;