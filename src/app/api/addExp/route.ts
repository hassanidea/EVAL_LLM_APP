import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { experiments } from "~/server/db/schema";
import { getAnswers, getTestCases, getMetric } from "~/app/utils/groqClients";

const correctnessPrompt =
  "You are an LLM evaluator. Evaulate the correctness outputting a score out of 100% based on the llm responses to each test case provided by the user. Provide the answer only as a Percentage with nothing else as NUMBER%.";
const alignmentPrompt =
  "You are an LLM evaluator. Evaulate the Prompt Alignment (Prompt Alignment: Determines whether an LLM output is able to follow instructions from your prompt template.) outputting a score out of 100% based on the llm responses to each test case provided by the user. Provide the answer only as a Percentage with nothing else as NUMBER%.";
const relevancyPrompt =
  "You are an LLM evaluator. Evaulate the relevancy (Answer Relevancy: Determines whether an LLM output is able to address the given input in an informative and concise manner.) outputting a score out of 100% based on the llm responses to each test case provided by the user. Provide the answer only as a Percentage with nothing else as NUMBER%.";

export async function POST(req: Request) {
  const data = await req.json();

  //get test cases based on prompt
  var testCases: any = await (
    await getTestCases(data)
  ).choices[0]?.message?.content;

  console.log(testCases);

  // get answers based on these test cases from specified LLM
  const answers: any = await (
    await getAnswers(data, testCases)
  ).choices[0]?.message?.content;

  console.log(answers);

  // get Correctness score
  const correctness = await getMetric(data, answers, correctnessPrompt);

  console.log("Correctness: ", correctness);

  const alignment = await getMetric(data, answers, alignmentPrompt);

  console.log("Alignment: ", alignment);

  const relevancy = await getMetric(data, answers, relevancyPrompt);

  console.log("Relevancy: ", relevancy);

  try {
    await db.insert(experiments).values({
      id: (await db.query.experiments.findMany()).length + 1,
      name: data.name,
      prompt: data.prompt,
      llm: data.llm,
      correctness: correctness,
      alignment: alignment,
      relevancy: relevancy,
    });
  } catch (error) {
    console.error("Error in POST request:", error);
  }

  return NextResponse.json("Thank you");
}
