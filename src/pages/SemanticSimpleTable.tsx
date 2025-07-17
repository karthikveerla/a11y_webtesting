const SemanticSimpleTable = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Semantic Simple Table</h1>
    <table id="semanticTable" className="table-auto border w-full">
      {/* <caption className="caption-top text-gray-700 font-semibold">Employee Performance Q1</caption> */}
      <thead className="bg-gray-200">
        <tr>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Dept</th>
          <th className="border px-4 py-2">Rating</th>
          <th className="border px-4 py-2">Comments</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Alice</td>
          <td className="border px-4 py-2">Sales</td>
          <td className="border px-4 py-2">4</td>
          <td className="border px-4 py-2">Good performance</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Bob</td>
          <td className="border px-4 py-2">Engineering</td>
          <td className="border px-4 py-2">3</td>
          <td className="border px-4 py-2">Average work</td>
        </tr>
      </tbody>
    </table>
  </div>
);
export default SemanticSimpleTable;
