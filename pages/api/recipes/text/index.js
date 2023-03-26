import { Client } from "@notionhq/client";

export default async function handler(req, res) {
  const { query = {} } = req;
  const { q = "" } = query;

  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const databaseId = process.env.DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: "Tags",
          status: {
            equals: "Done",
          },
        },
        {
          property: "Name",
          rich_text: {
            contains: q,
          },
        },
      ],
    },
    page_size: 5,
  });

  res.status(200).json(response.results);
}
