import axios from "axios";

const ethApi = "https://ethgasstation.info/api/ethgasAPI.json?";

const getData = () => {
  return axios
    .get(ethApi)
    .then(response => response.data)
    .catch(error => {
      console.log("ERROR:", error);
    });
};

export default getData;
