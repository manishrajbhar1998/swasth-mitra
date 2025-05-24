import React, { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export const AdminDetailsProvider = ({ children }) => {
    const [adminDetails, setAdminDetails] = useState(false);

    return (
        <AdminContext.Provider value={{ adminDetails, setAdminDetails }}>
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