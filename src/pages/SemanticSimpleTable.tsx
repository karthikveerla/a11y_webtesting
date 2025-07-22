const SemanticSimpleTable = () => (
  <div className="space-y-8">
    {/* Table 1: Employee Performance - caption mismatch*/}
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-300">
      <h1 className="text-2xl font-bold mb-4">Semantic Simple Table</h1>
      <table
        id="performanceTable"
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


    {/* Table 2: Project Status - no caption*/}
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

    {/* Table 3: Team Ratings - html tags + no role  -Pass*/}
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

    {/* Table 4: Project Assignments with Presentation Role misuse*/}
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

    {/* 3. Table with ARIA Role misuse*/}
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
    {/* 4. ARIA-based Data Table */}
    <section id="section-aria-data-table" className="p-6 bg-white text-gray-900">
      <h2 className="text-xl font-bold mb-4">ARIA-Based Data Table</h2>

      <div
        id="table-aria-data"
        role="table"
        className="border-2 border-black grid grid-cols-3 w-full"
        aria-label="Project milestone progress"
      >
        {/* Header Row */}
        <div role="rowgroup" className="contents">
          <div role="row" className="contents bg-gray-200 font-bold">
            <div role="columnheader" className="border-2 border-black p-2">Milestone</div>
            <div role="columnheader" className="border-2 border-black p-2">Owner</div>
            <div role="columnheader" className="border-2 border-black p-2">Status</div>
          </div>
        </div>

        {/* Body Rows */}
        <div role="rowgroup" className="contents">
          <div role="row" className="contents">
            <div role="cell" className="border-2 border-black p-2">Kickoff</div>
            <div role="cell" className="border-2 border-black p-2">Alice</div>
            <div role="cell" className="border-2 border-black p-2">Done</div>
          </div>
          <div role="row" className="contents">
            <div role="cell" className="border-2 border-black p-2">Design</div>
            <div role="cell" className="border-2 border-black p-2">Bob</div>
            <div role="cell" className="border-2 border-black p-2">In Progress</div>
          </div>
        </div>
      </div>
    </section>
    {/* 5. Visual Table with No ARIA, No Semantics */}
    <section id="section-aria-data-fail" className="p-6 bg-white text-gray-900">
      <h2 className="text-xl font-bold mb-4">Visual Table (No ARIA, No Semantics)</h2>

      <div
        id="table-aria-fail"
        className="grid grid-cols-3 border-2 border-red-600 w-full"
      >
        {/* Visual Headers - no roles */}
        <div className="p-2 font-bold border border-gray-400 bg-gray-200">Task</div>
        <div className="p-2 font-bold border border-gray-400 bg-gray-200">Owner</div>
        <div className="p-2 font-bold border border-gray-400 bg-gray-200">Status</div>

        {/* Visual Rows - no roles */}
        <div className="p-2 border border-gray-300">Wireframes</div>
        <div className="p-2 border border-gray-300">Dana</div>
        <div className="p-2 border border-gray-300">Pending</div>

        <div className="p-2 border border-gray-300">Development</div>
        <div className="p-2 border border-gray-300">Leo</div>
        <div className="p-2 border border-gray-300">In Progress</div>
      </div>
    </section>
  </div>
);

export default SemanticSimpleTable;
