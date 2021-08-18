import notifiers from "./notifiers/notifiers";

const main = () => {
  process.argv.slice(2).forEach(arg => notifiers[arg]());
};

main();
