import { Client } from "@notionhq/client";

export async function getAllCategories(limit) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const response = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
    filter: {
      property: "Select",
      multi_select: {
        is_not_empty: true,
      },
    },
    page_size: limit,
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

  return uniqueTags.slice(0, limit);
}
