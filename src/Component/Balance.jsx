import React,{useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState'

const Balance = () => {
const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount)
    const total = amount.reduce((acc, item)=> (acc += item), 0).toFixed(2);
const income = amount.filter(item => item > 0).reduce((acc,item)=> (acc+= item), 0).toFixed(2)
const expence = (
    amount.filter(item => item < 0).reduce((acc,item)=> (acc += item),0) * -1
    ).toFixed(2)

    return (
    <div>
             <h4>Your Balance</h4>
                <h1 id="balance">${total}</h1>

        <div className="inc-exp-container">
            <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">+${income}</p>
            </div>
                <div>
                    <h4>Expense</h4>
                    <p id="money-minus" className="money minus">-${expence}</p>
                </div>
        </div>
    </div>
    );
};

export default Balance;