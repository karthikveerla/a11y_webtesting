const LayoutTable = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Layout Table (non-semantic)</h1>
    <table className="border w-full bg-gray-100">
      <tr>
        <td className="p-6 border w-1/2">
          <h2 className="text-lg font-semibold">Welcome!</h2>
          <p>This section holds the welcome message and intro text.</p>
        </td>
        <td className="p-6 border w-1/2">
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
        </td>
      </tr>
      <tr>
        <td className="p-4 border" colSpan={2}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Continue</button>
        </td>
      </tr>
    </table>
  </div>
);
export default LayoutTable;
