import React from "react";

const Form = () => {
  return (
    <form>
      <div>
        <h2>Input the prompt to test LLM's </h2>
      </div>

      <div className="grid-cols-2-flow-row grid w-full justify-between gap-4 py-4">
        <div className="w-1/4">
          <p>Prompt</p>
        </div>
        <div className="w-3/4">
          <input className="w-96 rounded-md text-black"></input>
        </div>
        <div>
          <button
            type="button"
            className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            Generate test cases and Start Experiment
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
