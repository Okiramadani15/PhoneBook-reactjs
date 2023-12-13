import PhoneCard from "./PhoneCard";
export default function PhoneContainer({ user, update, remove, avatar}) {
 
  const usersNode = user.map((item) => <PhoneCard user={item} remove={() => remove(item.id)} update={update} />);

  return (
    <div className="card">
      {usersNode}
    </div>
  );
}
