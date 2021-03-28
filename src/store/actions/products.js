import axios from "../../axios/axios";

export const handleGetAllProducts = () => dispatch => {
  axios
    .get("/")
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
