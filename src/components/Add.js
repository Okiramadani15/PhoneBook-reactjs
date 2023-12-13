import { useState } from "react";
import { Link } from "react-router-dom";
export default function Add({addUser}) {

const [name , setName ] = useState('')   
const [phone , setPhone ] = useState('')   
   
 const saveAdd = () => {
    addUser (name, phone)
 }

  return (
    <>
      <input className="input-add-name" type="text" placeholder=""  value={name} onChange={(e)=> setName(e.target.value)}/>
      <input className="input-add-phone" type="text" placeholder="" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
      <Link to="/">
        <br/>
      <button onClick={saveAdd} className="add-save">save
      </button></Link>
      <Link to="/">
      <button className="add-cancel">cancel</button>
      </Link>
    </>
  );
}
