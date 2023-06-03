import { Client } from "@notionhq/client";

export async function filterRecipes(body = "") {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const filters = {
    and: [
      {
        property: "Tags",
        status: {
          equals: "Done",
        },
      },
    ],
  };

  const response = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
    filter: body === "" ? filters : JSON.parse(body),
    page_size: 12,
  });

  return response.results;
}
