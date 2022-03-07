import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// initial State
const initialState = {
    users: []
};

// create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions 
    const removeUser = (id) => {
        dispatch({ type: 'REMOVE_USER', payload: id })
    }

    const editUser = (user) => {
        dispatch ({ type: 'EDIT_USER', payload: user})
    }

    const addUser = (user) => {
        dispatch ({ type: 'ADD_USER', payload: user})
    }

    return (
        <GlobalContext.Provider value={{
    // The useReducer 'state' is passed to the users as the state to be updated. 
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
