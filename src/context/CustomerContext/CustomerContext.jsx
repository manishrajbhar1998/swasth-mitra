import { createContext, useReducer } from "react";
import { initialValue, reducer } from "./reducer";



export const CustomerConext = createContext(null);



const CustomerContextProvider = ({ children }) => {

    const [state, dispatcher] = useReducer(reducer, initialValue);

    return (
        <CustomerConext.Provider value={{ state, dispatcher }}>
            {children}
        </CustomerConext.Provider>
    )
}

export default CustomerContextProvider;
