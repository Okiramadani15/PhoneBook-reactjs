import PhoneContainer from "./PhoneContainer";
import SearchBar from "./SearchBar";
export default function AllContainer({ user, update, remove, avatar, setKeyword}) {
  return (
    <div className="all">
      <SearchBar setKeyword={setKeyword} />
      <PhoneContainer user={user} update={update} remove={remove} avatar={avatar}/>
    </div>
  );
}
