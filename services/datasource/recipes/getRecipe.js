import { Client } from "@notionhq/client";

/**
 * 
 * @param {string} id 
 * @returns Array of blocks from notion page
 */
export async function getRecipe(id) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.blocks.children.list({
    block_id: id,
  });

  return response.results;
}