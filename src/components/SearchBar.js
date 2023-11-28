export default function SearchBar() {
  return (
    <form className="search"> 
      <button className="button-sort">
        <i class="fa-solid fa-arrow-down-z-a"></i>
      </button>
      <input className="input-search" type="text" placeholder="Search..."/>
      <button className="button-add">
        <i class="fa-solid fa-user-plus"></i>
      </button>
    </form>
  );
}
