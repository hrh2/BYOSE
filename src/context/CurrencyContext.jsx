// context/CurrencyContext.js
import React, { createContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState(localStorage.getItem('selectedCurrency') || 'USD');

    useEffect(() => {
        localStorage.setItem('selectedCurrency', currency);
    }, [currency]);

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export { CurrencyContext, CurrencyProvider };
