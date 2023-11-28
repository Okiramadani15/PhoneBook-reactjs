import PhoneCard from "./PhoneCard";
export default function PhoneContainer({ list =[1,2,3,4,5,6,7,8,7,8,9,10,11,12,13,14,15,16,17,18,19,20]} ) {
    const listNode = list.map((item, index) =>(<PhoneCard key={item} todo={item}/>))
    return(
        <div className="card">
            {listNode}
        </div>
    )
}