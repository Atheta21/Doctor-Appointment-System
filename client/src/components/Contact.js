import React, { useState } from "react";
import axios from "axios";
import "../styles/contact.css";

const Contact = () => {

const [form,setForm] = useState({
name:"",
email:"",
message:""
});

const handleChange = (e)=>{
setForm({
...form,
[e.target.name]:e.target.value
});
};

const handleSubmit = async(e)=>{
e.preventDefault();

try{

const res = await axios.post("/api/user/contact",form);

if(res.data.success){
alert("Message sent successfully");

setForm({
name:"",
email:"",
message:""
});
}

}catch(error){
console.log(error);
alert("Error sending message");
}

};

return (

<section className="contact" id="contact">

<h2 className="section-title">Contact Us</h2>

<div className="contact-container">

{/* GOOGLE MAP */}

<div className="map-container">
<iframe
title="Hospital Location Map"
src="https://www.google.com/maps?q=bhopal&output=embed"
style={{ border: 0 }}
loading="lazy"
></iframe>
</div>

{/* CONTACT FORM */}

<form className="contact-form" onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Your Name"
value={form.name}
onChange={handleChange}
/>

<input
type="email"
name="email"
placeholder="Your Email"
value={form.email}
onChange={handleChange}
/>

<textarea
name="message"
placeholder="Your Message"
value={form.message}
onChange={handleChange}
></textarea>

<button type="submit">
Send Message
</button>

</form>

</div>

</section>

);
};

export default Contact;