// import React from "react";

const TableRole1 = () => {
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
        


        {/* Scenario 1: FAIL - HTML Table with role="presentation" */}
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
        
        <div style={{ padding: '1.5rem', backgroundColor: '#fffbe6', border: '1px solid #f7dc6f', borderRadius: '10px', fontFamily: 'Segoe UI, sans-serif' }}>
  <h3 style={{ color: '#d35400' }}>🚀 Daily Dose of Randomness</h3>
  
  <p style={{ color: '#6c5ce7' }}>
    🐙 Fun Fact: An octopus has three hearts, nine brains, and blue blood. Basically, it's the overachiever of the sea.
  </p>

  <blockquote style={{ margin: '1rem 0', padding: '0.5rem 1rem', backgroundColor: '#fef9e7', borderLeft: '4px solid #f39c12', fontStyle: 'italic' }}>
    “Life is like a camera. Focus on what’s important, capture the good times, develop from the negatives, and if things don’t work out… take another shot.”
  </blockquote>

  <p style={{ color: '#2c3e50' }}>
    🧩 Riddle: I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?
  </p>

  <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#dff9fb', borderRadius: '8px' }}>
    <h4 style={{ color: '#130f40' }}>🎯 Mini Challenge</h4>
    <p>Write a one-liner React hook that returns the current time and updates every second. Bonus points if you format it like `HH:mm:ss`!</p>
  </div>

  <p style={{ marginTop: '1rem', color: '#7f8c8d' }}>
    ✨ Reminder: You’re doing better than you think. Keep building, keep learning, and don’t forget to laugh at your console errors.
  </p>
        </div>


        {/* Scenario 2: FAIL - HTML Table with ARIA Role Misuse */}
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

      </div>
    </div>
  );
};

export default TableRole1;
