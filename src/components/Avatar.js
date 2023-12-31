import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
export default function Avatar({avatar}) {


  const [gambar, setGambar] = useState();
  const {state} = useLocation()
  const navigate = useNavigate()
  console.log(state)
  const imageChange = (e) => {
    if (e.target.files || e.target.files.length > 0) setGambar(e.target.files[0]);
  };

  const uploadGambar = () => {
    const formData = new FormData();
    formData.append("avatar", gambar);
    avatar(state.id, formData)
    navigate('/')

  };
  return (
    <div className="update-avatar">
        <form onSubmit={uploadGambar}>
                <input accept="image/*" type="file" onChange={imageChange}  className="Input-avatar"/>
                <div className="btn-form-update">
                    <button type="submit" className="add-save">save</button>
                    <Link to="/">
                   <button className="add-cancel">cancel</button>
                    </Link>
                </div>
            </form>

            {(gambar ? (
                <div className="avatar-preview">
                     <img
                        src={URL.createObjectURL(gambar)}
                        alt=""
                    />
                </div>
            ) :
                (<div className="preview">
                    <img src={"http://localhost:3000/images/" + 
                        (state.avatar ? state.avatar : "user-tie-solid.svg")} alt="avatar" />
                </div>
                )
            )}
        </div>
  );
}
