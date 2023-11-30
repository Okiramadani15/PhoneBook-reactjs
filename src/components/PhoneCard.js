export default function PhoneCard({user}) {

  return (
      <form className="phone-card">
        <div>
          <img src="Defaultavatar.png" alt="" className="avatar" />
        </div>
        <div className="title">
          <p>{user.name}</p>
          <p>{user.phone}</p>
          <div className="click">
            <i class="fa-solid fa-pen-to-square pencil" />
            <i class="fa-solid fa-trash-can trash" />
          </div>
        </div>
      </form>
  );
}
