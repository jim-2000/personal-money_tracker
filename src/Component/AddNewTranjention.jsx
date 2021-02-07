import React,{useState,useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';

const AddNewTranjention = () => {
    const [text, settext] = useState('')
    const [amount, setamount] = useState(0)
const {addTransaction}  = useContext(GlobalContext)


const onSubmited = (e) => {
    e.preventDefault()

    const newTransaction = {
        id: Math.floor(Math.random() * 1000000 ),
        text,
        amount: +amount
    }
    addTransaction(newTransaction)
}
    return (
        <div>
            
      <h3>Add new transaction</h3>
            <form onSubmit={onSubmited}>
                <div className="form-control">
                <label >Text</label>
                <input type="text" value={text} onChange={(e)=> settext(e.target.value)} id="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label 
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" onChange={(e)=> setamount(e.target.value)} id="amount" placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
    
        </div>
    );
};

export default AddNewTranjention;