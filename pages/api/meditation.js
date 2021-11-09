import fs from "fs";
import path from "path";
import getConfig from 'next/config'

export const config = {
  unstable_includeFiles: ['folder-relative-to-root'],
};



export default async function handler(req, res) {
  try {
    const file = [
      {
        "author": "Mindful Awareness Research Centre, UCLA",
        "audio": "/meditation/track1.mp3",
        "id": "55070f04-5e31-40ae-ac59-3bffc4c89951",
        "thumbnail": "/meditation/ucla.webp",
        "title": "Breath, sound and body"
      },
      {
        "author": "Mindful Awareness Research Centre, UCLA",
        "audio": "/meditation/track2.mp3",
        "id": "59ccc465-d471-4ce0-8704-40c1753abc84",
        "thumbnail": "/meditation/ucla.webp",
        "title": "Seated meditation"
      },
      {
        "author": "Mindful Awareness Research Centre, UCLA",
        "audio": "/meditation/track3.mp3",
        "id": "f7bf5ff7-1ef6-432b-959a-3ee79161ea80",
        "thumbnail": "/meditation/ucla.webp",
        "title": "Breath, sounds, body, thoughts, emotions"
      },
      {
        "author": "Mindful Awareness Research Centre, UCLA",
        "audio": "/meditation/track4.mp3",
        "id": "090809e1-3dfc-4bfa-843d-ce468eec985d",
        "thumbnail": "/meditation/cfmFBlogo.webp",
        "title": "Forty-five minute body scan"
      },
      {
        "author": "Lesfm",
        "audio": "/meditation/track5.mp3",
        "id": "2bfb9b83-bb79-4c50-9465-72f51265f883",
        "thumbnail": "/meditation/lesfm.webp",
        "title": "Deep ambient space"
      },
      {
        "author": "Arctic Fox Music",
        "audio": "/meditation/track6.mp3",
        "id": "85a11628-8662-4bbb-af25-5117c4e429c7",
        "thumbnail": "/meditation/arcticFoxMusic.webp",
        "title": "Dream of athena"
      },
      {
        "author": "Gabriel Douglas",
        "audio": "/meditation/track7.mp3",
        "id": "4b645f9b-403a-4e5e-9333-1cb6f7f141ac",
        "thumbnail": "/meditation/ucla.webp",
        "title": "Free will"
      },
      {
        "author": "Tattooed Preacher",
        "audio": "/meditation/track8.mp3",
        "id": "456425be-5b47-4619-9d58-dc0e40edb975",
        "thumbnail": "/meditation/tattooedPreacher.webp",
        "title": "Heart of mine"
      },
      {
        "author": "Mindful Awareness Research Centre, UCLA",
        "audio": "/meditation/track9.mp3",
        "id": "25d679c8-8f1e-45a2-bfee-2f07cc20faf3",
        "thumbnail": "/meditation/ucla.webp",
        "title": "Breath, sound and body"
      },
      {
        "author": "Mindful Awareness Research Centre, UCLA",
        "audio": "/meditation/track10.mp3",
        "id": "517047d9-47e1-422e-a8e2-7ab78852bf45",
        "thumbnail": "/meditation/ucla.webp",
        "title": "Breath, sound and body"
      }
    ]

    // path.resolve(__dirname, './public/img/test/');
    const dir = path.resolve('public/meditation/meditationData.json');
    /* const meditationPath = path.join(
      process.cwd(),
      "/public/meditation/meditationData.json"
    );
    const meditationFile = fs.readFileSync(meditationPath);*/
    const meditationPath = path.join(
      process.cwd(),
      //getConfig().serverRuntimeConfig.PROJECT_ROOT,
      //__dirname,
      "public/meditation/meditationData.json"
    );
    
    // const meditationFile = fs.readFileSync(meditationPath);

    res.status(200).json(file);
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).end(error.message);
  }
}
