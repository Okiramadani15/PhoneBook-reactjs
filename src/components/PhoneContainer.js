import PhoneCard from "./PhoneCard";
export default function PhoneContainer({ list =[1,2,3,4,5,]} ) {
    const listNode = list.map((item, index) =>(<PhoneCard key={item} todo={item}/>))
    return(
        <div className="card">
            {listNode}
        </div>
    )
}