import axios from "axios";

const apiUrl = "http://localhost:1234/api";

export const Axios = axios.create({
  withCredentials: true,
  baseURL: apiUrl
})