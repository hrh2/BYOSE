// services/currencyService.js
import axios from 'axios';

const TOKEN = import.meta.env.CURRENCY_CONVENTION_BASE_URL_TOKEN;
const BASE_URL = import.meta.env.CURRENCY_CONVENTION_BASE_URL;

export const getExchangeRates = async () => {
    try {
        axios.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;
        const response = await axios.get(BASE_URL);
        if (response.data.result === 'success') {
            return response.data.conversion_rates;
        } else {
            throw new Error('Failed to fetch exchange rates');
        }
    } catch (error) {
        console.error('Error fetching exchange rates', error);
        return null;
    }
};

export const convertCurrency = (amount, rate) => {
    return amount * rate;
};
