import PhoneCard from "./PhoneCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PhoneContainer({}) {
    const [users, setUsers] = useState([])
    const usersNode = users.map((item)=>(<PhoneCard user={item}/>))

  useEffect(() => {
     axios.get('http://localhost:3001/users').then((response)=>{
      if (response.data)
      setUsers(response.data.phonebooks)
    })
  })
  return (
    <div className="card">
        {usersNode}
    </div>
  )

}