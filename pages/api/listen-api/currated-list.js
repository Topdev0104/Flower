import Cors from "cors";
const { Client } = require("podcast-api");

const cors = Cors({
  methods: ["GET", "HEAD"],
});

const client = Client({
  apiKey: process.env.NODE_ENV === "production" ? process.env.LISTEN_API : null,
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  try {
    await runMiddleware(req, res, cors);

    const response = await client.fetchCuratedPodcastsListById({
      id: "EceF93NUSbJ",
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).end(error.message);
  }
}
