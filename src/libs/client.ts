import Axios from "axios";

export const apiClient = Axios.create({
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});
