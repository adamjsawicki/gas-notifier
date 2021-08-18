import notifier from "node-notifier";
import { graphql } from "graphql";
import { loadSchema } from "@graphql-tools/load";
import { UrlLoader } from "@graphql-tools/url-loader";

import config from "./../config.json";
import cronJob from "../utils/cronJob";

const mirrorEndpoint = "https://graph.mirror.finance/graphql";

let schema;

const getSchema = async () => {
  if (!schema)
    schema = await loadSchema(mirrorEndpoint, { loaders: [new UrlLoader()] });
  return schema;
};

const getTokensOfInterest = async (symbols: string[]) => {
  const schema = await getSchema();
  const result: any = await graphql(
    schema,
    " query { assets { token symbol } }"
  );
  return result.data.assets.filter(asset => symbols.includes(asset.symbol));
};

const getPriceOfTokenOfInterest = async (token: string) => {
  const query = `
  query {
      asset(token: "${token}") {
        prices {
          price
        }
      }
    }
  `;
  const schema = await getSchema();
  const response: any = await graphql(schema, query);
  return response.data.asset.prices.price;
};

const mirrorPrices = async () => {
  const tokens = await getTokensOfInterest(config.mirrorPrices.symbols);
  const message = (
    await Promise.all(
      tokens.map(
        async token =>
          await getPriceOfTokenOfInterest(token.token).then(
            price => `${token.symbol}: ${price}`
          )
      )
    )
  ).join("\n");
  notifier.notify({
    title: "Current prices of assets on Mirror",
    message,
  });
};

const main = () => {
  notifier.notify({
    title: "Starting mirror-prices-notifier!",
    message: `Here to let you know the prices of assets on mirror ${config.mirrorPrices.symbols}`,
  });
  cronJob(mirrorPrices);
};

export default main;
