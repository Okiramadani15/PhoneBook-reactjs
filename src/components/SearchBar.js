import { Link } from "react-router-dom";

export default function SearchBar({setKeyword}) {

  return (
    <form className="search"> 
      <button type="sort" className="button-sort">
        <i class="fa-solid fa-arrow-down-z-a"></i>
      </button>
      <input className="input-search" type="text" placeholder="Search..." onChange={(e) => setKeyword(e.target.value) }/>
      <Link to="/add">
      <button type="add" className="button-add">
        <i class="fa-solid fa-user-plus"></i>
      </button>
      </Link>
    </form>
  );
}
