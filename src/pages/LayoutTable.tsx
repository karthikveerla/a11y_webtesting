const LayoutTable = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Layout Table (non-semantic)</h1>
    <table className="border-2 border-black w-full bg-gray-100">
      <tbody>
        <tr>
          <td className="p-6 border-2 border-black w-1/2 align-top">
            <h2 className="text-lg font-semibold mb-2">Welcome!</h2>
            <p>This section holds the welcome message and intro text.</p>
          </td>
          <td className="p-6 border-2 border-black w-1/2">
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
              className="mx-auto"
            />
          </td>
        </tr>
        <tr>
          <td className="p-4 border-2 border-black text-center" colSpan={2}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Continue
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default LayoutTable;
