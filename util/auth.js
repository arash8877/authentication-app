import axios from "axios";
const baseUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const apiKey = "AIzaSyAa6KIva2yDn6_0ckG3q_B9rBt9m22fYDs";

export const createUser = async (email, password) => {
  const response = await axios.post(`${baseUrl}${apiKey}`, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
};
