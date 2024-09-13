import React, { createContext, useEffect, useState } from "react";

const AddressContext = createContext(null);

const AddressProvider = ({ children }) => {
    const [address, setAddress] = useState(() => {
        const savedAddress = localStorage.getItem("addressDetails");
        return savedAddress ? JSON.parse(savedAddress) : {};
    });

    useEffect(() => {
        localStorage.setItem("addressDetails", JSON.stringify(address));
    }, [address]);

    return (
        <AddressContext.Provider value={{ address, setAddress }}>
            {children}
        </AddressContext.Provider>
    );
};

export { AddressContext, AddressProvider };