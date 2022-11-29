import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Create initial state
const initialState = {
    transactions: [
        
        { id: 1, text: 'Salary', amount: 300 },
        { id: 2, text: 'Book', amount: -170 },
       
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Create a provider for components to consume and subscribe to changes
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

