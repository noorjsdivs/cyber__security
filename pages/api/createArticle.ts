import type { NextApiRequest, NextApiResponse } from "next";
import SanityClient from "@sanity/client";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "8b5tp3lo",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
};

const client = SanityClient(config);

export default async function createArticle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id, name, email, title, content } = JSON.parse(req.body);

  try {
    await client.create({
      _type: "article",
      post: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      title,
      content,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: `Couldn't submit Article`, err });
  }
  console.log("Article submitted successfully");

  return res.status(200).json({ message: "Article submitted successfully" });
}
