// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useContext, useEffect } from 'react';

const PopupContext = createContext();

// eslint-disable-next-line react/prop-types
export function PopupProvider({ children }) {
    const [message, setMessage] = useState(null);

    const showPopup = (message,bg_color,color) => {
        setMessage({message,bg_color,color});
    };
    const clearPopup = () => {
        setMessage(null);
    };
    return (
        <PopupContext.Provider value={{ message, showPopup,clearPopup}}>
            {children}
        </PopupContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePopup() {
    return useContext(PopupContext);
}
