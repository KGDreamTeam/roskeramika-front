import axios from "axios";

/*
 * first is for dev
 * second is for prod
 */
export default axios.create({
  //baseURL: 'http://localhost:8000',
  baseURL: "http://195.38.168.115:8080"
});
