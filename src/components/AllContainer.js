import PhoneContainer from "./PhoneContainer";
import SearchBar from "./SearchBar"

export default function AllContainer() {
    return(
        <div className="all">
            <SearchBar/>
            <PhoneContainer/>
        </div>
    );
}