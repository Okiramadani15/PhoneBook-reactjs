import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useState } from "react";
export default function PhoneCard({ user, remove, update }) {
  const submit = () => {
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

  const [input, setInput] = useState({
    id: user.id,
    name: user.name,
    phone: user.phone,
  });

  const [isEdit, setIsEdit] = useState(false);

  const saveData = () => {
    update(input.id, input.name, input.phone);
    setIsEdit(false)
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
            <i onClick={saveData} class="fa-solid fa-floppy-disk save"  />
            <i onClick={()=> setIsEdit(false)} class="fa-solid fa-rotate" />
          </div>
        </div>
      </form>
    );
  } else {
    return (
      <form className="phone-card">
        <div>
          <img src="Defaultavatar.png" alt="" className="avatar" />
        </div>
        <div className="edit">
          <p>{user.name}</p>
          <p>{user.phone}</p>
          <i onClick={() => setIsEdit(true)} class="fa-solid fa-pen-to-square pencil" />
          <i onClick={submit} class="fa-solid fa-trash-can trash" />
        </div>
      </form>
    );
  }
}
