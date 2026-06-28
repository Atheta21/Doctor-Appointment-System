import React,{useEffect,useState} from "react";
import axios from "axios";
import AdminLayout from "../../components/AdminLayout";
import "../../styles/admin.css";

function Contacts(){

const [messages,setMessages] = useState([]);

const getMessages = async()=>{

const res = await axios.get("/api/admin/contact-messages",{
headers:{
Authorization:"Bearer "+localStorage.getItem("token")
}
});

setMessages(res.data.data);

};

useEffect(()=>{
getMessages();
},[]);

return(

<AdminLayout>

<h2>Contact Messages</h2>

<table className="admin-table">

<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Message</th>
</tr>
</thead>

<tbody>

{messages.map((m)=>(

<tr key={m._id}>

<td>{m.name}</td>
<td>{m.email}</td>
<td>{m.message}</td>

</tr>

))}

</tbody>

</table>

</AdminLayout>

);

}

export default Contacts;