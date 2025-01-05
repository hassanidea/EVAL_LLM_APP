import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { experiments } from "~/server/db/schema";

export async function POST(req: Request) {
  const data = await req.json();
  //   //   const { prompt, name, llm } =
  console.log(data.prompt);
  try {
    await db.insert(experiments).values({
      id: (await db.query.experiments.findMany()).length + 1,
      name: data.name,
      prompt: data.prompt,
      llm: data.llm,
    });
  } catch (error) {
    console.error("Error in POST request:", error);
  }
  return NextResponse.json("Thank you");
}
