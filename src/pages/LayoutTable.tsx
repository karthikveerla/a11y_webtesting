const LayoutTable = () => (
 <div className="p-6 space-y-12 bg-white text-gray-900">
      {/* ✅ Table with role="presentation" → Should PASS */}
      <section id="section-layout-pass">
        <h2 className="text-xl font-bold mb-4">1. Layout Table (Presentation Role)</h2>
        <table
          id="table-layout-pass"
          className="w-full border-2 border-black"
          role="presentation"
        >
          <tbody>
            <tr>
              <td className="border-2 border-black p-4">
                <h3 className="font-semibold">Welcome Message</h3>
                <p>This section displays a welcome note.</p>
              </td>
              <td className="border-2 border-black p-4">
                <img src="https://via.placeholder.com/100" alt="Illustration" />
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ❌ Table with no role → Should FAIL */}
      <section id="section-layout-fail">
        <h2 className="text-xl font-bold mb-4">2. Layout Table (No ARIA Role)</h2>
        <table
          id="table-layout-fail"
          className="w-full border-2 border-black"
        >
          <tbody>
            <tr>
              <td className="border-2 border-black p-4">
                <h3 className="font-semibold">Welcome Message</h3>
                <p>This section displays a welcome note.</p>
              </td>
              <td className="border-2 border-black p-4">
                <img src="https://via.placeholder.com/100" alt="Illustration" />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
);

export default LayoutTable;
