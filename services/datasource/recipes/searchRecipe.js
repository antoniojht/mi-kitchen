import { Client } from "@notionhq/client";

export async function searchRecipeDataSource(query) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const response = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
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
            contains: query,
          },
        },
      ],
    },
    page_size: 5,
  });

  return response.results;
}
