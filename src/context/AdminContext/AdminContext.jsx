import React, { createContext, useContext, useReducer } from 'react';
import { initialValue, reducer } from './reducer';

const AdminContext = createContext();

export const AdminDetailsProvider = ({ children }) => {
    const getInitialState = () => {
        const sessionData = JSON.parse(sessionStorage.getItem("adminDetails") || "{}");
        return Object.keys(sessionData).length > 0 ? sessionData : initialValue;
    };

    const [state, dispatch] = useReducer(reducer, getInitialState());

    return (
        <AdminContext.Provider value={{ state, dispatch }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useLoadingAdminDeatils = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error('useLoadingAdminDeatils must be used within a AdminDetailsProvider');
    }
    return context;
};
