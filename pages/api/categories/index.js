import { Client } from "@notionhq/client";

export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const databaseId = process.env.DATABASE_ID;

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Select",
      multi_select: {
        is_not_empty: true,
      },
    },
  });

  const multiSelect = response.results.map(
    (page) => page.properties.Select.multi_select
  );

  const uniqueTags = multiSelect.flat().reduce((accumulator, current) => {
    if (!accumulator.find((item) => item.id === current.id)) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);

  res.status(200).json(uniqueTags);
}
