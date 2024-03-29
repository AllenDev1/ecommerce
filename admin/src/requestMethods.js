import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";



const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const currentUser = user && JSON.parse(user).currentUser;
const user = currentUser?.accessToken;
console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser));



export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
