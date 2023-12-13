import PhoneContainer from "./PhoneContainer";
import SearchBar from "./SearchBar";
export default function AllContainer({ user, update, remove, avatar}) {
  return (
    <div className="all">
      <SearchBar />
      <PhoneContainer user={user} update={update} remove={remove} avatar={avatar} />
    </div>
  );
}
