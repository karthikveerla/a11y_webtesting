import React from "react";

const CaptionTest = () => {
  return (
    <div className="p-8 space-y-12 max-w-5xl mx-auto bg-gray-100 min-h-screen font-sans text-gray-800">
      
      {/* App Header */}
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-2">Table Caption Test Playground</h1>
        <p className="text-center text-lg text-gray-600">
          This application contains different data tables to verify if their `&lt;caption&gt;` tags meet accessibility requirements.
        </p>
      </div>

      <main className="space-y-8">
        
        {/* Scenario 1: Best Practice - Descriptive Caption */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">BEST PRACTICE: Descriptive Caption</h2>
          <p className="text-gray-600">
            This table demonstrates the best practice. The `&lt;caption&gt;` element is present and provides a clear, concise description of the table's purpose. An AI should pass this test.
          </p>
          <table id="caption-best-practice" className="w-full table-auto border-collapse border border-gray-400 rounded-lg overflow-hidden">
            <caption className="caption-top text-left text-lg font-semibold p-2 text-gray-700">Quarterly Website Traffic by Source</caption>
            <thead className="bg-green-100">
              <tr>
                <th scope="col" className="px-4 py-2 text-left font-bold border border-gray-400">Source</th>
                <th scope="col" className="px-4 py-2 text-left font-bold border border-gray-400">Q1 Visitors</th>
                <th scope="col" className="px-4 py-2 text-left font-bold border border-gray-400">Q2 Visitors</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300">Organic Search</td>
                <td className="px-4 py-2 border border-gray-300">50,000</td>
                <td className="px-4 py-2 border border-gray-300">55,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">Social Media</td>
                <td className="px-4 py-2 border border-gray-300">35,000</td>
                <td className="px-4 py-2 border border-gray-300">42,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Scenario 2: Warning - Vague or Redundant Caption */}
        <div className="space-y-6 pt-12">
          <h2 className="text-2xl font-bold">WARNING: Vague Caption</h2>
          <p className="text-gray-600">
            The `&lt;caption&gt;` here is present, but its content is vague ("Sales Data") and doesn't fully describe the table's purpose. An AI should flag this as a warning or a minor issue.
          </p>
          <table id="caption-warning-vague" className="w-full table-auto border-collapse border border-gray-400 rounded-lg overflow-hidden">
            <caption className="caption-top text-left text-lg font-semibold p-2 text-gray-700">personal Details</caption>
            <thead className="bg-yellow-100">
              <tr>
                <th scope="col" className="px-4 py-2 text-left font-bold border border-gray-400">Region</th>
                <th scope="col" className="px-4 py-2 text-left font-bold border border-gray-400">Product A Sales</th>
                <th scope="col" className="px-4 py-2 text-left font-bold border border-gray-400">Product B Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300">North</td>
                <td className="px-4 py-2 border border-gray-300">$15,000</td>
                <td className="px-4 py-2 border border-gray-300">$18,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">South</td>
                <td className="px-4 py-2 border border-gray-300">$22,000</td>
                <td className="px-4 py-2 border border-gray-300">$20,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Scenario 3: Fail - Missing Caption */}
        <div className="space-y-6 pt-12">
          <h2 className="text-2xl font-bold">FAIL: Missing Caption</h2>
          <p className="text-gray-600">
            This table completely lacks a `&lt;caption&gt;` element. An AI should flag this as a major accessibility failure as it removes critical context for screen reader users.
          </p>
          <table id="caption-fail-missing" className="w-full table-auto border-collapse border border-gray-400 rounded-lg overflow-hidden">
            <thead className="bg-red-100">
              <tr>
                <th scope="col" className="px-4 py-2 text-left font-bold border border-gray-400">Employee ID</th>
                <th scope="col" className="px-4 py-2 text-left font-bold border border-gray-400">Name</th>
                <th scope="col" className="px-4 py-2 text-left font-bold border border-gray-400">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300">101</td>
                <td className="px-4 py-2 border border-gray-300">Alan Turing</td>
                <td className="px-4 py-2 border border-gray-300">Engineer</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">102</td>
                <td className="px-4 py-2 border border-gray-300">Grace Hopper</td>
                <td className="px-4 py-2 border border-gray-300">Manager</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </main>
      
      <footer className="bg-white rounded-3xl shadow-xl p-6 text-center text-gray-600">
        <p>Example page for table caption analysis.</p>
      </footer>
      
    </div>
  );
};

export default CaptionTest;
