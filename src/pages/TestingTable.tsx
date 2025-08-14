import React from "react";

const TestingTable = () => {
  return (
    <div className="p-8 space-y-12 max-w-5xl mx-auto bg-gray-100 min-h-screen font-sans text-gray-800">
      
      {/* App Header */}
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-2">Accessibility Test Playground</h1>
        <p className="text-center text-lg text-gray-600">
          This sample application contains a variety of tables designed to be tested by an automated accessibility tool. Each table represents a distinct scenario for semantic analysis.
        </p>
      </div>

      {/* Test Scenarios Section */}
      <div className="space-y-8">
        
        {/* Scenario 1: PASS - Semantic HTML Table */}
        <div className="bg-white rounded-3xl shadow-lg p-6 border-4 border-green-400">
          <h2 className="text-2xl font-bold mb-4">PASS: Semantic HTML Table with no ARIA roles</h2>
          <p className="text-gray-600 mb-6">
            This table is correctly marked up using native HTML tags (`&lt;table&gt;`, `&lt;thead&gt;`, `&lt;th&gt;`, `&lt;tbody&gt;`, `&lt;td&gt;`). This is the most accessible and recommended approach.
          </p>
          <table id="table-html-pass" className="w-full table-auto border-collapse border border-gray-400 rounded-lg overflow-hidden">
            <caption className="caption-top text-left text-lg font-semibold p-2 text-gray-700">Q3 Sales Report</caption>
            <thead className="bg-green-100">
              <tr>
                <th scope="col" className="px-4 py-2 text-left font-bold border border-gray-400">Product</th>
                <th scope="col" className="px-4 py-2 text-left font-bold border border-gray-400">Units Sold</th>
                <th scope="col" className="px-4 py-2 text-left font-bold border border-gray-400">Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300">Widget A</td>
                <td className="px-4 py-2 border border-gray-300">12,000</td>
                <td className="px-4 py-2 border border-gray-300">$120,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">Widget B</td>
                <td className="px-4 py-2 border border-gray-300">8,500</td>
                <td className="px-4 py-2 border border-gray-300">$85,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Scenario 2: FAIL - HTML Table with role="presentation" */}
        <div className="bg-white rounded-3xl shadow-lg p-6 border-4 border-red-400">
          <h2 className="text-2xl font-bold mb-4">FAIL: HTML Table with role="presentation"</h2>
          <p className="text-gray-600 mb-6">
            This table uses the correct HTML tags but the `role="presentation"` attribute removes all semantic meaning, making it inaccessible as a data table.
          </p>
          <table id="table-presentation-fail" role="presentation" className="w-full table-auto border-collapse border border-red-500 rounded-lg overflow-hidden">
            <caption className="caption-top text-left text-lg font-semibold p-2 text-gray-700">Employee Feedback Report</caption>
            <thead className="bg-red-100">
              <tr>
                <th scope="col" className="px-4 py-2 text-left font-bold border border-red-500">Employee</th>
                <th scope="col" className="px-4 py-2 text-left font-bold border border-red-500">Department</th>
                <th scope="col" className="px-4 py-2 text-left font-bold border border-red-500">Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300">Tom Wilson</td>
                <td className="px-4 py-2 border border-gray-300">Engineering</td>
                <td className="px-4 py-2 border border-gray-300">4</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">Jane Doe</td>
                <td className="px-4 py-2 border border-gray-300">Marketing</td>
                <td className="px-4 py-2 border border-gray-300">3</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Scenario 3: FAIL - HTML Table with ARIA Role Misuse */}
        <div className="bg-white rounded-3xl shadow-lg p-6 border-4 border-red-400">
          <h2 className="text-2xl font-bold mb-4">FAIL: HTML Table with ARIA Role Misuse</h2>
          <p className="text-gray-600 mb-6">
            This table uses `role="grid"` on a native `&lt;table&gt;` element. This is a misuse of ARIA, as it implies interactive spreadsheet-like behavior that is not present.
          </p>
          <table id="table-grid-misuse-fail" role="grid" className="w-full table-auto border-collapse border border-red-500 rounded-lg overflow-hidden">
            <caption className="caption-top text-left text-lg font-semibold p-2 text-gray-700">Project Budgets</caption>
            <thead className="bg-red-100">
              <tr>
                <th role="columnheader" className="px-4 py-2 text-left font-bold border border-red-500">Project</th>
                <th role="columnheader" className="px-4 py-2 text-left font-bold border border-red-500">Budget</th>
                <th role="columnheader" className="px-4 py-2 text-left font-bold border border-red-500">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr role="row" className="bg-white">
                <td role="cell" className="px-4 py-2 border border-gray-300">Project Alpha</td>
                <td role="cell" className="px-4 py-2 border border-gray-300">$50,000</td>
                <td role="cell" className="px-4 py-2 border border-gray-300">On Track</td>
              </tr>
              <tr role="row" className="bg-gray-50">
                <td role="cell" className="px-4 py-2 border border-gray-300">Project Beta</td>
                <td role="cell" className="px-4 py-2 border border-gray-300">$75,000</td>
                <td role="cell" className="px-4 py-2 border border-gray-300">Over Budget</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Scenario 4: PASS - ARIA-Based Data Table */}
        <div className="bg-white rounded-3xl shadow-lg p-6 border-4 border-green-400">
          <h2 className="text-2xl font-bold mb-4">PASS: ARIA-Based Data Table</h2>
          <p className="text-gray-600 mb-6">
            This table is built with `&lt;div&gt;` elements but uses a complete set of ARIA roles (`role="table"`, `role="row"`, `role="cell"`, etc.) to provide correct semantic information.
          </p>
          <div id="table-aria-pass" role="table" aria-label="Team Overview" className="border-collapse border border-gray-400 rounded-lg overflow-hidden grid grid-cols-3">
            <div role="rowgroup" className="contents">
              <div role="row" className="bg-green-100 contents font-bold">
                <span role="columnheader" className="px-4 py-2 text-left text-gray-800 font-bold border border-gray-400 block w-full md:w-auto">Name</span>
                <span role="columnheader" className="px-4 py-2 text-left text-gray-800 font-bold border border-gray-400 block w-full md:w-auto">Role</span>
                <span role="columnheader" className="px-4 py-2 text-left text-gray-800 font-bold border border-gray-400 block w-full md:w-auto">Status</span>
              </div>
            </div>
            <div role="rowgroup" className="contents">
              <div role="row" className="bg-white contents">
                <span role="cell" className="px-4 py-2 border border-gray-300 block w-full md:w-auto">David Lee</span>
                <span role="cell" className="px-4 py-2 border border-gray-300 block w-full md:w-auto">Developer</span>
                <span role="cell" className="px-4 py-2 border border-gray-300 block w-full md:w-auto">Active</span>
              </div>
              <div role="row" className="bg-gray-50 contents">
                <span role="cell" className="px-4 py-2 border border-gray-300 block w-full md:w-auto">Maria Garcia</span>
                <span role="cell" className="px-4 py-2 border border-gray-300 block w-full md:w-auto">Designer</span>
                <span role="cell" className="px-4 py-2 border border-gray-300 block w-full md:w-auto">Vacation</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scenario 5: FAIL - Visual Table with no Semantics */}
        <div className="bg-white rounded-3xl shadow-lg p-6 border-4 border-red-400">
          <h2 className="text-2xl font-bold mb-4">FAIL: Visual Table (No Semantics, No ARIA)</h2>
          <p className="text-gray-600 mb-6">
            This is a purely visual table created with CSS Grid. There are no semantic HTML tags or ARIA roles, making it completely inaccessible to assistive technologies.
          </p>
          <div id="table-css-fail" className="grid grid-cols-3 gap-0 border-collapse border border-red-500 rounded-lg overflow-hidden">
            <div className="p-4 bg-red-100 font-bold text-gray-800 border-b border-r border-red-500">Task</div>
            <div className="p-4 bg-red-100 font-bold text-gray-800 border-b border-r border-red-500">Owner</div>
            <div className="p-4 bg-red-100 font-bold text-gray-800 border-b border-red-500">Due Date</div>
            <div className="p-4 border-b border-r border-gray-300">Plan Campaign</div>
            <div className="p-4 border-b border-r border-gray-300">David</div>
            <div className="p-4 border-b border-gray-300">10/25</div>
            <div className="p-4 border-r border-gray-300">Write Copy</div>
            <div className="p-4 border-r border-gray-300">David</div>
            <div className="p-4 border-gray-300">10/15</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TestingTable;
