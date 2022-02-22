import useAuthContext from "../../hooks/useAuthContext";
import useFirestore from "../../hooks/useFirestore";
import "./Add.css";

const Add = ({ uid }) => {
  const { error,setError, loading, addDoc } = useFirestore("transactions");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    // console.log(uid);
    let newdoc = {
      uid,
      name: e.target.name.value,
      cost: e.target.amount.value,
    };
    addDoc(newdoc);
    // console.log(newdoc);
    e.target.reset();
  };

  return (
    <div className="add_contain">
      <p className="sec_title">Add a Transaction</p>
      <div className="transaction_contain">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Transaction Name:</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="amount">Amount ($):</label>
          <input type="number" name="amount" id="amount" />
          {error && <p className="error">{error.message}</p>}
          
          <input type="submit" value="Add Transaction" className="btn_submit" />
        </form>
      </div>
    </div>
  );
};

export default Add;
