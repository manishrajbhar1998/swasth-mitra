import { createContext, useReducer } from "react";
import { initialValue, reducer } from "./reducer";



export const CustomerConext = createContext(null);



const CustomerContextProvider = ({ children }) => {

    const getInitialState = () => {
        const sessionData = JSON.parse(sessionStorage.getItem("appData") || "{}");
        return sessionData.customerData || initialValue;
    };

    const [state, dispatcher] = useReducer(reducer, getInitialState());

    return (
        <CustomerConext.Provider value={{ state, dispatcher }}>
            {children}
        </CustomerConext.Provider>
    )
}

export default CustomerContextProvider;
