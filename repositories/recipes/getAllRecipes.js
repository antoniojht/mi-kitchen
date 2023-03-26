export async function getAllRecipes(limit) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const response = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
    filter: {
      property: "Tags",
      status: {
        equals: "Done",
      },
    },
    page_size: limit,
  });

  return response.results;
}