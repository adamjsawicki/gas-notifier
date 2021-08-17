import notifier from "node-notifier";
import getData from "./getData";
import cronJob from "./cronJob";
import config from "./config.json";

const onTrigger = () => {
  getData().then(({ average }) => {
    const averageInGwei = average / 10;
    if (averageInGwei <= config.threshold) notifyLowGas(averageInGwei);
  });
};

const notifyLowGas = average => {
  notifier.notify({
    title: "Eth Gas Price Is Sane",
    message: `ETH average price currently at: ${average} gwei!`,
    timeout: 10,
  });
};

notifier.notify({
  title: "Starting eth-gas-notifier!",
  message: `Starting the notifier with a threshold of ${config.threshold} GWEI`,
});

cronJob(onTrigger);
