import axios from "axios";
const signupUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const signInUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
const apiKey = "AIzaSyAa6KIva2yDn6_0ckG3q_B9rBt9m22fYDs";


// async function authenticate (mode, email, password) {
//     const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${apiKey}`;
//     const response = await axios.post(url, {
//         email: email,
//         password: password,
//         returnSecureToken: true,
//       });
// }

export const createUser = async (email, password) => {
  const response = await axios.post(`${signupUrl}${apiKey}`, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log(response.data)
};

export const login = async (email, password) => {
    const response = await axios.post(`${signInUrl}${apiKey}`, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    console.log(response.data)
  };
