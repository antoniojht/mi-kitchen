import { Client } from "@notionhq/client";

export async function getRecipesFilterCategory(category) {
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
          property: "Select",
          multi_select: {
            contains: category,
          },
        },
      ],
    },
  });

  return response.results;
}
