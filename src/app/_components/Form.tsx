import React from "react";

const Form = () => {
  return (
    <form>
      <div>
        <h2>Input the prompt to test LLM's </h2>
      </div>

      <div className="flex w-full justify-between py-4">
        <div className="w-1/4">
          <p>Prompt</p>
        </div>
        <div className="w-3/4">
          <input className="w-96 rounded-md text-black"></input>
        </div>
      </div>
    </form>
  );
};

export default Form;
