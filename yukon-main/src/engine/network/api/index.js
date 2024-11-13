import axios from "axios";

const isProduction = process.env.NODE_ENV !== 'development';
const isStaging = window.location.href.includes("staging");

let baseURL;
if (isProduction && !isStaging) {
    baseURL = "https://api.cphorizon.com";
} else if (isProduction && isStaging) {
    baseURL = "https://staging-api.cphorizon.com";
} else {
    baseURL = "https://cphorizon.com";
}

const api = axios.create({
    baseURL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

export default api;