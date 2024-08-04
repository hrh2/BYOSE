import axios from "axios";

export async function fetchData(url,token) {
        try {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            const response = await axios.get(url);
            return {data:response.data};
        } catch (error) {
            return {error: error.response ? error.response.data.message : 'Network error the server is down.',data:-1}
        }
}

export async function sendData(url,data,token) {
    try {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await axios.post(url,data);
        return {data:response.data,message:response.data.message};
    } catch (error) {
        return {error: error.response ? error.response.data.message : 'Network error the server is down.',data:-1}
    }
}

export async function updateData(url,data,token) {
    try {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await axios.put(url,data);
        return {data:response.data,message:response.data.message};
    } catch (error) {
        return {error: error.response ? error.response.data.message : 'Network error the server is down.',data:-1}
    }
}

export function handleLogout(tokenName){
    localStorage.removeItem(tokenName);
    window.location = "/";
}
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
export  function formatDate(dateString) {
    // Create a Date object from the date string
    const date = new Date(dateString);

    // Define options for formatting the date
    const options = { day: 'numeric', month: 'short', year: 'numeric' };

    // Create an Intl.DateTimeFormat object with the defined options
    const formatter = new Intl.DateTimeFormat('en-GB', options);

    // Format the date
    return formatter.format(date);
}

export function capitalizeFirstThreeLetters(str) {
    if (str.length < 3) {
        // If the string is shorter than 3 characters, capitalize the whole string
        return str.toUpperCase();
    } else {
        // Get the first 3 letters and capitalize them
        return str.substring(0, 3).toUpperCase();
    }
}
export function capitalizeLastThreeLetters(str) {
    if (str.length < 3) {
        // If the string is shorter than 3 characters, capitalize the whole string
        return str.toUpperCase();
    } else {
        // Get the last 3 letters and capitalize them
        const lastThree = str.slice(-3).toUpperCase();
        return lastThree;
    }
}