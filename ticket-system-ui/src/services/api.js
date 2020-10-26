import axios from "axios";

export default axios.create({
  baseURL: `https://localhost:5001/api/`, //change address to target ticket API
  headers: {
    "Content-type": "application/json",
  },
});
