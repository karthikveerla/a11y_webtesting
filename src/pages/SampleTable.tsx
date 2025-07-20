const SampleTable = () => (
  <div className="space-y-8">
    {/* Table 1: Employee Performance */}
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-300">
      <h1 className="text-2xl font-bold mb-4">Semantic Simple Table</h1>
      <table
        role="presentation"
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

    {/* Image Between Tables */}
    <div className="flex justify-center">
      <img
        src="/a11y_webtesting/tablesnip.png"
        alt="Accessibility Overview"
        className="rounded-lg shadow-lg border max-w-full h-auto"
      />
    </div>


  </div>
);

export default SampleTable;
