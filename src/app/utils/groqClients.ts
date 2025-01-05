import Groq from "groq-sdk";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

interface Message {
  role: "system" | "user" | "assistant";
  prompt: string;
  llm: string;
}

export const getTestCases = async (message: Message) => {
  return groq.chat.completions.create({
    //
    // Required parameters
    //
    messages: [
      // Set an optional system message. This sets the behavior of the
      // assistant and can be used to provide specific instructions for
      // how it should behave throughout the conversation.
      {
        role: "system",
        content:
          "You are an LLM evaluator. Your job is to output 10 test cases of user messages based on the system prompt inputted by the user.",
      },
      // Set a user message for the assistant to respond to.
      {
        role: "user",
        content: message.prompt,
      },
    ],

    // The language model which will generate the completion.
    model: "gemma2-9b-it",
  });
};

export const getAnswers = async (message: Message, testCases: string) => {
  //   console.log(testCases);
  return groq.chat.completions.create({
    //
    // Required parameters
    //
    messages: [
      // Set an optional system message. This sets the behavior of the
      // assistant and can be used to provide specific instructions for
      // how it should behave throughout the conversation.
      {
        role: "system",
        content:
          "You are given 10 user messages and answer these prompts based on the prompt given:" +
          message.prompt,
      },
      // Set a user message for the assistant to respond to.
      {
        role: "user",
        content: testCases,
      },
    ],

    // The language model which will generate the completion.
    model: message.llm,
  });
};
//"You are an LLM evaluator. Evaulate the correctness outputting a score out of 100% based on the llm responses to each test case provided by the user."
export const getMetric = async (
  message: Message,
  answers: string,
  prompt: string,
) => {
  //   console.log(answers);

  const completion = await client.chat.completions.create({
    messages: [
      {
        role: "system",
        content: prompt,
      },
      {
        role: "user",
        content: answers,
      },
    ],
    model: "llama-3.1-70b-versatile",
  });

  return completion.choices[0]?.message.content;
};
