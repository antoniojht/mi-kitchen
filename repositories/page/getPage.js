import { Client } from "@notionhq/client";

export async function getPageInfo(id) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.pages.retrieve({ page_id: id });

  return response;
}