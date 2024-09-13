import React, { useState } from 'react';

const SnackBarContext = createContext(null);

const SnackBarProvider = ({ children }) => {
    const [SnackOpen, setSnackOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [VisibleProductId, setVisibleProductId] = useState(null);

    const handleSnackOpen = (productId, message) => {
        setSnackOpen(true);
        setMessage(message);
        setVisibleProductId(productId);
        setTimeout(() => {
            setSnackOpen(false);
            setVisibleProductId(productId);
        }, 2000)
    }
    return (
        <SnackBarContext.Provider value={{ handleSnackOpen, SnackOpen, message, VisibleProductId }}>
            {children}
        </SnackBarContext.Provider>
    )
}

export { SnackBarContext, SnackBarProvider };