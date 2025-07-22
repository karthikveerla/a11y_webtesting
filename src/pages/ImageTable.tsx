import React from 'react';

const ImageTable = () => {
  return (
    <div className="p-8 space-y-12 bg-white text-gray-900">
      {/* 1. Semantic HTML Table (UI = DOM match) */}
      <section>
        <h2 className="text-xl font-bold mb-4">1. Current Team Assignments</h2>
        <table id="table-current-team" className="table-auto w-full border-2 border-gray-800">
          <caption className="caption-top text-left font-semibold text-gray-700 mb-2">
            Team and Roles
          </caption>
          <thead className="bg-gray-100">
            <tr>
              <th className="border-2 px-4 py-2">Name</th>
              <th className="border-2 px-4 py-2">Role</th>
              <th className="border-2 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Anjali</td>
              <td className="border px-4 py-2">Developer</td>
              <td className="border px-4 py-2">Active</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">David</td>
              <td className="border px-4 py-2">Designer</td>
              <td className="border px-4 py-2">On Leave</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 2. Image-only table (UI visible, not semantic DOM) */}
      <section>
        <h2 className="text-xl font-bold mb-4">2. Archived Assignments</h2>
        <p className="mb-2 text-sm text-gray-700">Below is a visual summary of archived team roles:</p>
        <img
          id="img-archived-table"
          src="tablesnip.png"
          alt="Archived team assignments table visual"
          className="border-2 border-gray-800"
        />
      </section>
    </div>
    
  );
};

export default ImageTable;
