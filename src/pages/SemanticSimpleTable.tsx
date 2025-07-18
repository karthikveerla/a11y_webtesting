const SemanticSimpleTable = () => (
  <div className="space-y-8">
    {/* Table 1: Employee Performance */}
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-300">
      <h1 className="text-2xl font-bold mb-4">Semantic Simple Table</h1>
      <table
        id="semanticTable"
        className="table-auto border-2 border-black w-full"
        aria-label="Employee performance table"
      >
        <caption className="caption-top text-left text-gray-700 font-semibold mb-2">
          Product Sales
        </caption>
        <thead className="bg-gray-200">
          <tr>
            <th className="border-2 border-black px-4 py-2">Name</th>
            <th className="border-2 border-black px-4 py-2">Dept</th>
            <th className="border-2 border-black px-4 py-2">Rating</th>
            <th className="border-2 border-black px-4 py-2">Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-black px-4 py-2">Alice</td>
            <td className="border-2 border-black px-4 py-2">Sales</td>
            <td className="border-2 border-black px-4 py-2">4</td>
            <td className="border-2 border-black px-4 py-2">Good performance</td>
          </tr>
          <tr>
            <td className="border-2 border-black px-4 py-2">Bob</td>
            <td className="border-2 border-black px-4 py-2">Engineering</td>
            <td className="border-2 border-black px-4 py-2">3</td>
            <td className="border-2 border-black px-4 py-2">Average work</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Table 2: Project Status */}
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-300">
      <h2 className="text-xl font-semibold mb-4">Project Status Table</h2>
      <table
        id="projectTable"
        className="table-auto border-2 border-black w-full"
        aria-label="Project status tracking table"
      >
        {/* <caption className="caption-top text-left text-gray-700 font-semibold mb-2">
          Current project progress and owners
        </caption> */}
        <thead className="bg-gray-200">
          <tr>
            <th className="border-2 border-black px-4 py-2">Project</th>
            <th className="border-2 border-black px-4 py-2">Owner</th>
            <th className="border-2 border-black px-4 py-2">Status</th>
            <th className="border-2 border-black px-4 py-2">Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-black px-4 py-2">Website Redesign</td>
            <td className="border-2 border-black px-4 py-2">Sara</td>
            <td className="border-2 border-black px-4 py-2">In Progress</td>
            <td className="border-2 border-black px-4 py-2">Aug 25</td>
          </tr>
          <tr>
            <td className="border-2 border-black px-4 py-2">Mobile App</td>
            <td className="border-2 border-black px-4 py-2">Tom</td>
            <td className="border-2 border-black px-4 py-2">Completed</td>
            <td className="border-2 border-black px-4 py-2">Jul 10</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default SemanticSimpleTable;
