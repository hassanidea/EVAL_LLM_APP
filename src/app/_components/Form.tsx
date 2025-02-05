"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import { db } from "~/server/db";
import { experiments } from "~/server/db/schema";

const Form = () => {
  const router = useRouter();

  const [prompt, setPrompt] = useState("");
  const [name, setName] = useState("");
  const [llm, setLLM] = useState("");

  const handleSend = async () => {
    // await db
    //   .insert(experiments)
    //   .values({ name: name, prompt: prompt, llm: llm });

    try {
      const response = await fetch("/api/addExp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, name, llm }),
      });
    } catch (error) {
      console.error("Error:", error);
    }
    router.refresh();
  };

  return (
    <div>
      <div>
        <form>
          <div>
            <h2>Input the following details to test LLM's </h2>
          </div>

          <div className="grid-cols-2-flow-row grid w-full justify-between gap-4 py-4">
            <div className="">
              <p>Experiment Name</p>
            </div>
            <div className="w-3/4">
              <input
                type="text"
                className="w-96 rounded-md text-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your Experiment Name..."
              ></input>
            </div>
            <div className="w-1/4">
              <p>Sytem Prompt to be Evaluated</p>
            </div>
            <div className="w-3/4">
              <input
                type="text"
                className="w-96 rounded-md text-black"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Type your Prompt..."
              ></input>
            </div>
          </div>

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-black-100 bg-white text-black"
                >
                  Choose LLM
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>LLM</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={llm} onValueChange={setLLM}>
                  <DropdownMenuRadioItem value="llama-3.3-70b-versatile">
                    llama-3.3-70b-versatile
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="gemma2-9b-it">
                    gemma2-9b-it
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="mixtral-8x7b-32768">
                    mixtral-8x7b-32768
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <div>
              <button
                type="button"
                className="my-10 mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100"
                onClick={handleSend}
              >
                Generate test cases and Start Experiment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
