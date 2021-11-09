import Cors from "cors";
import { RadioBrowserApi } from "radio-browser-api";

const api = new RadioBrowserApi("Testing");

const cors = Cors({
  methods: ["GET", "HEAD", "OPTIONS"],
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
    const { tag } = req.query;

    await runMiddleware(req, res, cors);

    const response = await api.searchStations({
      countryCode: "US",
      language: "english",
      languageExact: true,
      limit: 15,
      tag: tag,
      tagExact: true,
    });

    const formatted = response.map((station) => ({
      audio: station.urlResolved,
      id: station.id,
      thumbnail: station.favicon,
      title: station.name,
    }));

    res.status(200).json(formatted);
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).end(error.message);
  }
}
