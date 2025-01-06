import React from "react";

import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const Experiments = async () => {
  const experiments = await db.query.experiments.findMany();

  return (
    <table className="table-auto rounded-md border-2 border-indigo-600 bg-white text-black">
      <thead>
        <tr>
          <th>Experiment</th>
          <th>Prompt</th>
          <th>LLM</th>
          <th>Correctness</th>
          <th>Prompt Alignment</th>
          <th>Relevancy</th>
        </tr>
      </thead>
      <tbody>
        {experiments.map((experiment) => (
          <tr key={experiment.id}>
            <td>{experiment.name}</td>
            <td>{experiment.prompt}</td>
            <td>{experiment.llm}</td>
            <td>{experiment.correctness}</td>
            <td>{experiment.alignment}</td>
            <td>{experiment.relevancy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Experiments;
