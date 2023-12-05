import PhoneCard from "./PhoneCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PhoneContainer({}) {
    const [users, setUsers] = useState([])
    
  useEffect(() => {
     axios.get('http://localhost:3001/users').then((response)=>{
      if (response.data)
      setUsers(response.data.phonebooks)
    })
  },[])

  const Delete = (id) => {
    axios.delete(`http://localhost:3001/users/${id}`).then((response)=>{
      setUsers(users.filter((item) => item.id !== id))
    })
  }

  const UpdateData = ( id , name , phone) => {
    axios.put(`http://localhost:3001/users/${id}`, {name,phone}).then((response) =>{
      setUsers((currentData) => currentData.map((item) => {
        if (item.id === id ) {
          item.name = response.data.name;
          item.phone = response.data.phone;
        } 
        return item;
      })
      )
    }) 
    .catch(() => {
      alert('update gagal')
    })
    
  }

  const usersNode = users.map((item)=>(<PhoneCard user={item} remove={()=>Delete(item.id)} update={UpdateData}/>))


  return (
    <div className="card">
        {usersNode}
    </div>
   )
  }

