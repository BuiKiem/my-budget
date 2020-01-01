import axios from "axios";

export const createAccount = data =>
  axios
    .post("http://localhost:8000/api/accounts/", data)
    .then(response => {
      alert("Success!");
      return true;
    })
    .catch(error => {
      alert(error);
      return false;
    });

export const updateAccount = data =>
  axios
    .put(`http://localhost:8000/api/accounts/${data.id}/`, data)
    .then(response => {
      alert("Success!");
      return true;
    })
    .catch(error => {
      alert(error);
      return false;
    });
