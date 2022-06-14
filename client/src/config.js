//config.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://mungnyangapp.herokuapp.com/mungnyang-server/",
});
