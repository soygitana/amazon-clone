import React, {createContext, useContext, useReducer} from 'react';

//prepare the data
export const StateContext = createContext();

// wrap, data layer
export const StateProvider = ({ reducer,
initialState, children}) => (
<StateContext.Provider value={useReducer(reducer, initialState)}>
{children}
</StateContext.Provider>
);

// pull info from data layer
export const useStateValue = () =>  useContext(StateContext);