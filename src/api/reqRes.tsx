import axios from "axios";

// Constante que crea la comunica con el API - endpoint
export const reqResApi = axios.create({
    baseURL:'https://reqres.in/api'
});
