import axios from "axios";
import { useEffect, useState } from "react";
import AllContainer from "./components/AllContainer";
import Avatar from "./components/Avatar";
import {Routes, Route, Outlet, BrowserRouter} from "react-router-dom"
import Add from "./components/Add";
export default function App() {
  const [users, setUsers] = useState([]);
  const [keyword, setKeyword] = useState("")

  

  useEffect(() => {
    axios.get("http://localhost:3001/users").then((response) => {
      if (response.data) setUsers(response.data.phonebooks);
    });
  }, []);

  useEffect(()=>{
  if (keyword !== ""){
    axios.get(`http://localhost:3001/users/?keyword=${keyword}`).then((response) => {
     if (response.data) setUsers(response.data.phonebooks);
  })
}
},[keyword])
 

  const Delete = (id) => {
    axios.delete(`http://localhost:3001/users/${id}`).then((response) => {
      setUsers(users.filter((item) => item.id !== id));
    });
  };

  const UpdateData = (id, name, phone) => {
    axios
      .put(`http://localhost:3001/users/${id}`, { name, phone })
      .then((response) => {
        setUsers((currentData) =>
          currentData.map((item) => {
            if (item.id === id) {
              item.name = response.data.name;
              item.phone = response.data.phone;
            }
            return item;
          })
        );
      })
      .catch(() => {
        alert("update gagal");
      });
  };

  const UploadAvatar = (id, avatar) => {
    axios
      .put(`http://localhost:3001/users/${id}/avatar`,avatar, 
      {headers: {
        "Content-Type" : "multipart/form-data"
      }}  
      
      )
      .then((response) => {
        setUsers((currentData) =>
          currentData.map((item) => {
            if (item.id === id) {
              item.avatar = response.data.avatar;
            }
            return item;
          })
        );
      })
      .catch(() => {
        alert("ubah avatar gagal");
      });
  };

  const add = (name, phone) => {
    const id = Date.now().toString()
    setUsers([{id,name,phone},...users])
    axios
      .post(`http://localhost:3001/users`, { name, phone })
      .then((response) => {
        setUsers((currentData) =>
          currentData.map((item) => {
            if (item.id === id) {
              item.id = response.data.id
            }
            return item;
          })
        );
      })
      .catch(() => {
        alert("update gagal");
      });
  };



  return (
    <>  
    {/* <AllContainer/> */}
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}/>
            <Route index element={<AllContainer user={users} update={UpdateData} remove={Delete} setKeyword={setKeyword} />}/>
            <Route path="add" element={<Add addUser={add} user={users} setUsers={setUsers}/> }/>
            <Route path="uploadAvatar" element={<Avatar avatar={UploadAvatar}/>} />
        </Routes>
        </BrowserRouter>
    </div>
    </>

  );
}

function Layout(){
  return(
    <div>
      <Outlet/>
    </div>
  )
}
