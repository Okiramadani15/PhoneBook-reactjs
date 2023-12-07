import { useState } from "react";
export default function Avatar({avatarUpdate}) {


  const [gambar, setGambar] = useState({});

  const imageChange = (e) => {
    if (e.target.files || e.target.files.length > 0) setGambar(e.target.files[0]);
  };

  const uploadGambar = () => {
    const formData = new FormData();
    formData.append("avatar", gambar);

  };
  return (
    <div className="update-avatar">
      <form onSubmit={uploadGambar}>
        <div>
          <form>
            <input type="file" accept="image/*" onChange={imageChange}/>
            <button type="submit">save</button>
          </form>
        </div>
      </form>
    </div>
  );
}
