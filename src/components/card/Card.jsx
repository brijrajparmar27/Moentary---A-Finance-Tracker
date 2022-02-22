import useFirestore from "../../hooks/useFirestore";
import "./Card.css";

const Card = ({ each }) => {
  const { error, loading, addDoc, removeDoc } = useFirestore("transactions");

  const handleDelete = (id) => {
    // console.log("deleting", id);
    removeDoc(id);
  };
  return (
    <div className="card">
      <img src="https://img.icons8.com/ios-filled/100/000000/xbox-x.png"className="box" onClick={()=>{handleDelete(each.id)}}/>
      <p className="title">{each.name}</p>
      <p className="cost">${each.cost}</p>
    </div>
  );
};

export default Card;
