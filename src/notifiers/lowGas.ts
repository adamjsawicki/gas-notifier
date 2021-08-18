import axios from "axios";
import notifier from "node-notifier";
import cronJob from "../utils/cronJob";
import config from "./../config.json";

const ethApi = "https://ethgasstation.info/api/ethgasAPI.json?";

const getGas = () => {
  return axios
    .get(ethApi)
    .then(response => response.data)
    .catch(error => {
      console.log("ERROR:", error);
    });
};

const lowGas = () => {
  getGas().then(({ average }) => {
    const averageInGwei = average / 10;
    if (averageInGwei <= config.lowGas.threshold) notifyLowGas(averageInGwei);
  });
};

const notifyLowGas = average => {
  notifier.notify({
    title: "Eth Gas Price Is Sane",
    message: `ETH average price currently at: ${average} gwei!`,
    timeout: 10,
  });
};

const main = () => {
  notifier.notify({
    title: "Starting low-gas-notifier!",
    message: `Here to let you know when ETH gas drops below ${config.lowGas.threshold} gwei`,
  });
  cronJob(lowGas);
};

export default main;
