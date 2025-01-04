import React from "react";

const Experiments = () => {
  return (
    <table className="table-auto rounded-md border-2 border-indigo-600 bg-white text-black">
      <thead>
        <tr>
          <th>Experiment</th>
          <th>Test case</th>
          <th>LLM</th>
          <th>Performance</th>
          <th>Accuracy</th>
          <th>Relevancy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Intro to CSS</td>
          <td>Adam</td>
          <td>858</td>
        </tr>
        <tr>
          <td>
            A Long and Winding Tour of the History of UI Frameworks and Tools
            and the Impact on Design
          </td>
          <td>Adam</td>
          <td>112</td>
        </tr>
        <tr>
          <td>Intro to JavaScript</td>
          <td>Chris</td>
          <td>1,280</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Experiments;
