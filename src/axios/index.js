import axios from "axios";
/**
 * create axios instance
 */
export const AxiosInstance = axios.create({
  baseURL: "https://api-nodejs-todolist.herokuapp.com/",
});

// Alter defaults after instance has been created
/**
 * only add when token is mandatory below line
 */
AxiosInstance.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzUxYTJjMjZkNmYwZjAwMTc5MzIyMGQiLCJpYXQiOjE2Njg5NjE4OTJ9.L0gtxsL5pXs9oFRzNDEh-RpG-zAvu1-OxLdMSHkDHKY";
