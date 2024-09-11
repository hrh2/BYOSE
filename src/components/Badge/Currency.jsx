// components/CurrencyConverter.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from 'react';
import {FadeLoader} from "react-spinners";
import {CurrencyContext} from "../../context/CurrencyContext.jsx";
import {convertCurrency, getExchangeRates} from "../../services/currencyConversionService.js";

// eslint-disable-next-line react/prop-types
const CurrencyConverter = ({ amount }) => {
    const [exchangeRate, setExchangeRate] = useState(null);
    const { currency } = useContext(CurrencyContext);

    useEffect(() => {
        const fetchRates = async () => {
            const rates = await getExchangeRates();
            if (rates) {
                setExchangeRate(rates[currency]);
            }
        };

        fetchRates();
    }, [currency]);

    if (exchangeRate === null) {
        return <FadeLoader color={`#166534`} />;
    }

    const convertedAmount = convertCurrency(amount, exchangeRate);

    return (
        <>
            {convertedAmount.toFixed(2)} {currency}
        </>
    );
};

export default CurrencyConverter;
