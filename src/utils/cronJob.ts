import { CronJob } from "cron";

const oncePerMin = "* * * * *";

const cronJob = (onTrigger, cronTime: string = oncePerMin) => {
  const job = new CronJob(
    cronTime,
    () => {
      onTrigger();
    },
    null,
    true,
    "America/New_York"
  );
  return job;
};

export default cronJob;
