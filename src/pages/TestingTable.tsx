const TestingTable = () => (
  <div className="space-y-10 p-6 bg-gray-50 text-gray-800">

    {/* 1. Standard Table with Caption */}
    <section id="section-team-overview">
      <h2 className="text-xl font-bold mb-2">1. Team Overview</h2>
      <table
        id="table-team"
        className="table-auto w-full border-2 border-black"
        aria-label="Team member details"
      >
        <caption className="caption-top text-left font-semibold text-gray-600 mb-2">
          Team Member Ratings
        </caption>
        <thead className="bg-gray-200">
          <tr>
            <th className="border-2 border-black px-4 py-2">Name</th>
            <th className="border-2 border-black px-4 py-2">Score</th>
            <th className="border-2 border-black px-4 py-2">Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-black px-4 py-2">Alice</td>
            <td className="border-2 border-black px-4 py-2">9</td>
            <td className="border-2 border-black px-4 py-2">Excellent performance</td>
          </tr>
          <tr>
            <td className="border-2 border-black px-4 py-2">Bob</td>
            <td className="border-2 border-black px-4 py-2">7</td>
            <td className="border-2 border-black px-4 py-2">Good, but needs improvement</td>
          </tr>
          <tr>
            <td className="border-2 border-black px-4 py-2">Charlie</td>
            <td className="border-2 border-black px-4 py-2">8</td>
            <td className="border-2 border-black px-4 py-2">Consistent effort</td>
          </tr>
        </tbody>
      </table>
    </section>

    {/* 2. Table with Presentation Role */}
    <section id="section-projects">
      <h2 className="text-xl font-bold mb-2">2. Project Assignments</h2>
      <table id="table-projects" className="table-auto w-full border-2 border-black" role="presentation">
        <thead className="bg-gray-200">
          <tr>
            <th className="border-2 border-black px-4 py-2">Project</th>
            <th className="border-2 border-black px-4 py-2">Lead</th>
            <th className="border-2 border-black px-4 py-2">Status</th>
            <th className="border-2 border-black px-4 py-2">Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-black px-4 py-2">Website Redesign</td>
            <td className="border-2 border-black px-4 py-2">Tom</td>
            <td className="border-2 border-black px-4 py-2">In Progress</td>
            <td className="border-2 border-black px-4 py-2">2023-12-31</td>
          </tr>
          <tr>
            <td className="border-2 border-black px-4 py-2">Mobile App</td>
            <td className="border-2 border-black px-4 py-2">Sara</td>
            <td className="border-2 border-black px-4 py-2">Completed</td>
            <td className="border-2 border-black px-4 py-2">2023-10-15</td>
          </tr>
        </tbody>
      </table>
    </section>

    {/* 3. Table with ARIA Role */}
    <section id="section-performance">
      <h2 className="text-xl font-bold mb-2">3. Performance Metrics</h2>
      <table id="table-performance" className="table-auto w-full border-2 border-black" role="grid">
        <thead className="bg-gray-200">
          <tr>
            <th className="border-2 border-black px-4 py-2">Metric</th>
            <th className="border-2 border-black px-4 py-2">Value</th>
            <th className="border-2 border-black px-4 py-2">Comments</th>
            <th className="border-2 border-black px-4 py-2">Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-black px-4 py-2">Accessibility</td>
            <td className="border-2 border-black px-4 py-2">95%</td>
            <td className="border-2 border-black px-4 py-2">Excellent</td>
            <td className="border-2 border-black px-4 py-2">5</td>
          </tr>
        </tbody>
      </table>
    </section>

    {/* 4. ARIA-only Table (No <table> tag) */}
    <section id="section-tasks">
      <h2 className="text-xl font-bold mb-2">4. Task Tracker</h2>
      <div id="table-tasks" role="table" className="border-2 border-black grid grid-cols-3">
        <div role="rowgroup" className="contents">
          <div role="row" className="contents bg-gray-200">
            <div role="columnheader" className="border-2 border-black p-2 font-bold">Task</div>
            <div role="columnheader" className="border-2 border-black p-2 font-bold">Status</div>
            <div role="columnheader" className="border-2 border-black p-2 font-bold">Assigned To</div>
          </div>
        </div>
        <div role="rowgroup" className="contents">
          <div role="row" className="contents">
            <div role="cell" className="border-2 border-black p-2">Login</div>
            <div role="cell" className="border-2 border-black p-2">Complete</div>
            <div role="cell" className="border-2 border-black p-2">Alice</div>
          </div>
          <div role="row" className="contents">
            <div role="cell" className="border-2 border-black p-2">Sign Up</div>
            <div role="cell" className="border-2 border-black p-2">In Progress</div>
            <div role="cell" className="border-2 border-black p-2">Bob</div>
          </div>
        </div>
      </div>
    </section>

    {/* 5. Layout Table */}
    <section id="section-layout">
      <h2 className="text-xl font-bold mb-2">5. Layout Block</h2>
      <table id="table-layout" className="w-full border-2 border-black" role="presentation">
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

    {/* 6. CSS Grid Table */}
    <section id="section-stock">
      <h2 className="text-xl font-bold mb-2">6. Stock Items</h2>
      <div id="table-stock" className="grid grid-cols-2 border-2 border-gray-400">
        <div className="bg-gray-200 font-bold p-2 border">Item</div>
        <div className="bg-gray-200 font-bold p-2 border">Qty</div>
        <div className="p-2 border">Apples</div>
        <div className="p-2 border">12</div>
      </div>
    </section>

    {/* 7. Table as Image */}
    {/* <section id="section-visual">
      <h2 className="text-xl font-bold mb-2">7. Visual Overview</h2>
      <img
        id="table-visual"
        src="tablesnip.png"
        alt="Graphical summary of tabular data"
        className="border-2 border-black"
      />
    </section> */}
  </div>
);

export default TestingTable;
