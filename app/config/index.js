import axios from "axios";

// const apiUrl = "https://fossilapi.binary-apps.com/api";
const localApiUrl = "http://localhost:1234/api"

export const Axios = axios.create({
  withCredentials: true,
  baseURL: localApiUrl
})