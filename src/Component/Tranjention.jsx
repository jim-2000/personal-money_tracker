import React,{useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState'
import {Tranjentionnext} from './Tranjentionnext';



const Tranjention = () => {
  const {transactions} = useContext(GlobalContext) // destacture Transaction from initialstate 
  // console.log(context)


    return (
        <div>
                  <h3>History</h3>
      <ul id="list" className="list">
        {
          transactions.map(transaction => (
           <Tranjentionnext transaction={transaction} key={transaction.id} />
          ))
        }

      </ul>
        </div>
    );
};

export default Tranjention;