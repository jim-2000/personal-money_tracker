import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
// Initial State 

const InitialState = {
    transactions : [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

// createing Context 

export const GlobalContext = createContext(InitialState);




/// Provider Component 

export const GlobalProvider = ({children}) => {

// action Reducer 

function deleteTransaction(id){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    })
}

function addTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    })
}

        const [state, dispatch] = useReducer(AppReducer, InitialState);
        return (<GlobalContext.Provider 
                 value={{transactions:state.transactions
                 ,deleteTransaction,addTransaction
                 }}>
            {children}
        </GlobalContext.Provider>)
}
