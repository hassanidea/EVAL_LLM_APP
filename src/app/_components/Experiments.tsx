import React from "react";

import { db } from "~/server/db";
import Exp_row from "./Exp_row";

const Experiments = async () => {
  const experiments = await db.query.experiments.findMany();

  return (
    <table className="table-auto rounded-md border-2 border-indigo-600 bg-white text-black">
      <thead>
        <tr>
          <th>Experiment</th>
          <th>Propmt</th>
          <th>LLM</th>
          <th>Performance</th>
          <th>Accuracy</th>
          <th>Relevancy</th>
        </tr>
      </thead>
      <tbody>
        {experiments.map((experiment) => (
          <tr key={experiment.id}>
            <td>{experiment.name}</td>
            <td>{experiment.prompt}</td>
            <td>{experiment.llm}</td>
            <td>{experiment.performance}</td>
            <td>{experiment.accuracy}</td>
            <td>{experiment.relevancy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Experiments;
