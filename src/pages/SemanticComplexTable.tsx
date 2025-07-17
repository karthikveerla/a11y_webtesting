const SemanticComplexTable = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Semantic Complex Table</h1>
    <table className="table-auto w-full border" id="complexTable">
      <caption className="caption-top font-semibold">Quarterly Sales by Product and Region</caption>
      <thead className="bg-gray-200">
        <tr>
          <th rowSpan={2} className="border px-4 py-2" scope="col">Region</th>
          <th colSpan={2} className="border px-4 py-2" scope="col">Product A</th>
          <th colSpan={2} className="border px-4 py-2" scope="col">Product B</th>
        </tr>
        <tr>
          <th className="border px-4 py-2" scope="col">Q1</th>
          <th className="border px-4 py-2" scope="col">Q2</th>
          <th className="border px-4 py-2" scope="col">Q1</th>
          <th className="border px-4 py-2" scope="col">Q2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">North</td>
          <td className="border px-4 py-2">$10K</td>
          <td className="border px-4 py-2">$12K</td>
          <td className="border px-4 py-2">$8K</td>
          <td className="border px-4 py-2">$9K</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">South</td>
          <td className="border px-4 py-2">$7K</td>
          <td className="border px-4 py-2">$8K</td>
          <td className="border px-4 py-2">$6K</td>
          <td className="border px-4 py-2">$7K</td>
        </tr>
      </tbody>
    </table>
  </div>
);
export default SemanticComplexTable;
