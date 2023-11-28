export default function PhoneCard() {
  return (
      <form className="phone-card">
        <div>
          <img src="Defaultavatar.png" alt="" className="avatar" />
        </div>
        <div className="title">
          <p>Test</p>
          <p>08142384182</p>
          <p className="button">
            <i class="fa-solid fa-pen-to-square pencil" />
            <i class="fa-solid fa-trash-can trash" />
          </p>
        </div>
      </form>
  );
}
