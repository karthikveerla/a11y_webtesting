import React from "react";

const TestingTable = () => (
  <div className="p-6 space-y-8 max-w-4xl mx-auto font-sans">
    <h1 className="text-3xl font-bold text-gray-800">Data Table Accessibility Demonstrations</h1>
    <p className="text-gray-600 text-lg">
      This component provides a series of examples demonstrating various ways to build data tables, focusing on semantic correctness and accessibility. The examples are categorized as "PASS" or "FAIL" to highlight best practices and common pitfalls.
    </p>

    {/* Section 1: Semantic HTML Table (PASS) */}
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">PASS: Semantic HTML Table with no ARIA roles</h2>
      <p className="text-gray-500 mb-6">
        This is the recommended approach for most simple data tables. Using native HTML table elements provides all the necessary semantic information to assistive technologies by default.
      </p>
      <table id="table-html-pass" className="w-full table-auto border-collapse border border-gray-400 rounded-lg overflow-hidden">
        <caption className="caption-top text-left text-lg font-medium p-2 text-gray-700">Monthly Sales Report</caption>
        <thead className="bg-blue-100">
          <tr>
            <th scope="col" className="px-4 py-2 text-left text-gray-800 font-bold border border-gray-400">Product</th>
            <th scope="col" className="px-4 py-2 text-left text-gray-800 font-bold border border-gray-400">Q1 Sales</th>
            <th scope="col" className="px-4 py-2 text-left text-gray-800 font-bold border border-gray-400">Q2 Sales</th>
            <th scope="col" className="px-4 py-2 text-left text-gray-800 font-bold border border-gray-400">Q3 Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-300">Widget A</td>
            <td className="px-4 py-2 border border-gray-300">$12,000</td>
            <td className="px-4 py-2 border border-gray-300">$15,500</td>
            <td className="px-4 py-2 border border-gray-300">$18,200</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-300">Widget B</td>
            <td className="px-4 py-2 border border-gray-300">$8,500</td>
            <td className="px-4 py-2 border border-gray-300">$9,100</td>
            <td className="px-4 py-2 border border-gray-300">$10,400</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Section 2: HTML table with role="presentation" (FAIL) */}
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">FAIL: HTML Table with role="presentation"</h2>
      <p className="text-gray-500 mb-6">
        When `role="presentation"` is added to a table, it removes the semantic meaning. Screen readers will ignore the table structure and present the content as a flat, unorganized block of text. This is a severe accessibility issue for data tables.
      </p>
      <table id="table-presentation-fail" role="presentation" className="w-full table-auto border-collapse border border-red-500 rounded-lg overflow-hidden">
        <caption className="caption-top text-left text-lg font-medium p-2 text-gray-700">Team Performance Report</caption>
        <thead className="bg-red-100">
          <tr>
            <th scope="col" className="px-4 py-2 text-left text-gray-800 font-bold border border-red-500">Employee</th>
            <th scope="col" className="px-4 py-2 text-left text-gray-800 font-bold border border-red-500">Projects</th>
            <th scope="col" className="px-4 py-2 text-left text-gray-800 font-bold border border-red-500">Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-300">Alice Johnson</td>
            <td className="px-4 py-2 border border-gray-300">Project A, B</td>
            <td className="px-4 py-2 border border-gray-300">Excellent</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-300">Bob Smith</td>
            <td className="px-4 py-2 border border-gray-300">Project C</td>
            <td className="px-4 py-2 border border-gray-300">Good</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Section 3: HTML Table with ARIA Role Misuse (FAIL) */}
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">FAIL: HTML Table with ARIA Role Misuse (e.g., role="grid")</h2>
      <p className="text-gray-500 mb-6">
        Using an incorrect ARIA role like `role="grid"` on a standard HTML table can cause confusion. The `grid` role implies a complex, interactive spreadsheet-like component that should handle keyboard navigation and specific focus management.
      </p>
      <table id="table-grid-misuse-fail" role="grid" className="w-full table-auto border-collapse border border-red-500 rounded-lg overflow-hidden">
        <caption className="caption-top text-left text-lg font-medium p-2 text-gray-700">Department Budgets</caption>
        <thead className="bg-red-100">
          <tr>
            <th role="columnheader" className="px-4 py-2 text-left text-gray-800 font-bold border border-red-500">Department</th>
            <th role="columnheader" className="px-4 py-2 text-left text-gray-800 font-bold border border-red-500">Budget</th>
            <th role="columnheader" className="px-4 py-2 text-left text-gray-800 font-bold border border-red-500">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr role="row">
            <td role="cell" className="px-4 py-2 border border-gray-300">Marketing</td>
            <td role="cell" className="px-4 py-2 border border-gray-300">$150,000</td>
            <td role="cell" className="px-4 py-2 border border-gray-300">On Track</td>
          </tr>
          <tr role="row">
            <td role="cell" className="px-4 py-2 border border-gray-300">R&D</td>
            <td role="cell" className="px-4 py-2 border border-gray-300">$250,000</td>
            <td role="cell" className="px-4 py-2 border border-gray-300">Over Budget</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Section 4: ARIA-Only Table (PASS) */}
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">PASS: ARIA-Based Data Table (No HTML table tags)</h2>
      <p className="text-gray-500 mb-6">
        When it's not possible to use native table elements, you can use ARIA roles to correctly define a table structure. By applying `role="table"` to a `div`, and then `role="row"` and `role="cell"` to its child elements, you can provide the same semantic information as a native table.
      </p>
      <div id="table-aria-pass" role="table" aria-label="Student Grade Overview" className="border-collapse border border-gray-400 rounded-lg overflow-hidden">
        <div role="rowgroup" className="contents">
          <div role="row" className="bg-green-100 contents font-bold">
            <span role="columnheader" className="px-4 py-2 text-left text-gray-800 font-bold border border-gray-400 block w-full md:w-auto">Name</span>
            <span role="columnheader" className="px-4 py-2 text-left text-gray-800 font-bold border border-gray-400 block w-full md:w-auto">Course</span>
            <span role="columnheader" className="px-4 py-2 text-left text-gray-800 font-bold border border-gray-400 block w-full md:w-auto">Grade</span>
          </div>
        </div>
        <div role="rowgroup" className="contents">
          <div role="row" className="bg-white contents">
            <span role="cell" className="px-4 py-2 border border-gray-300 block w-full md:w-auto">Emma Davis</span>
            <span role="cell" className="px-4 py-2 border border-gray-300 block w-full md:w-auto">History</span>
            <span role="cell" className="px-4 py-2 border border-gray-300 block w-full md:w-auto">A-</span>
          </div>
          <div role="row" className="bg-gray-50 contents">
            <span role="cell" className="px-4 py-2 border border-gray-300 block w-full md:w-auto">Liam Chen</span>
            <span role="cell" className="px-4 py-2 border border-gray-300 block w-full md:w-auto">Science</span>
            <span role="cell" className="px-4 py-2 border border-gray-300 block w-full md:w-auto">B+</span>
          </div>
        </div>
      </div>
    </div>

    {/* Section 5: Purely Visual Table with CSS (FAIL) */}
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">FAIL: Visual Table (No Semantics, No ARIA)</h2>
      <p className="text-gray-500 mb-6">
        This example uses only CSS Grid or Flexbox to create a table-like visual layout. Because there are no semantic table tags or ARIA roles, assistive technologies will not recognize this as a table.
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
);

export default TestingTable;
