import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PhoneCard({ user, remove, update }) {
  // Alert (pop up delete )
  const submitAlert = () => {
    confirmAlert({
      title: "Anda akan menghapus phone card ini ",
      message: "Apakah anda menghapus phone card ini?",
      buttons: [
        {
          label: "Ya",
          onClick: () => remove(),
        },
        {
          label: "Tidak",
        },
      ],
    });
  };
  // pop up selesai

  //Update Contact
  const [input, setInput] = useState({
    id: user.id,
    name: user.name,
    phone: user.phone,
  });

  const [isEdit, setIsEdit] = useState(false);

  const saveData = () => {
    update(input.id, input.name, input.phone);
    setIsEdit(false);
  };

  if (isEdit) {
    return (
      <form className="phone-card">
        <div>
          <img src="Defaultavatar.png" alt="" className="avatar" />
        </div>

        <div className="edit">
          <p>
            <input type="text" value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} />
          </p>
          <p>
            <input type="text" value={input.phone} onChange={(e) => setInput({ ...input, phone: e.target.value })} />
          </p>
          <div className="change">
            <i onClick={saveData} className="fa-solid fa-floppy-disk save" />
            <i onClick={() => setIsEdit(false)} className="fa-solid fa-rotate" />
          </div>
        </div>
      </form>
    );
  } else {
    return (
      <form className="phone-card">
        <div>
          <Link to="/uploadAvatar" state={user}>
          <img src={"http://localhost:3001/images/" + 
                        (user.avatar ? user.avatar : "icon.png")} alt="" className="avatar" />
          </Link>
        </div>
        <div className="edit">
          <p>{user.name}</p>
          <p>{user.phone}</p>
          <i onClick={() => setIsEdit(true)} className="fa-solid fa-pen-to-square pencil" />
          <i onClick={submitAlert} className="fa-solid fa-trash-can trash" />
        </div>
      </form>
    );
  }
}
// updateContact selesai
