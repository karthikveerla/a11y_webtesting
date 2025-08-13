import React from "react";

const SemanticSimpleTable = () => (
  <div className="space-y-8 p-6">
    <p className="text-gray-700 text-base">
      This page demonstrates various table configurations, some of which are accessible and pass WCAG 2.1 AA semantic requirements, and others that intentionally fail for testing purposes.
    </p>

    <p className="text-gray-600 text-sm">
      The first example is a semantic HTML table with correct structure but a caption that does not match the actual table content. This simulates a minor accessibility concern that might still pass certain automated checks.
    </p>
    {/* PASS: Semantic Simple Table - Caption mismatch */}
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-300">
      <h1 className="text-2xl font-bold mb-4">Semantic Simple Table</h1>
      <table id="performanceTable" className="table-auto border-2 border-black w-full" aria-label="Employee performance table">
        <caption className="caption-top text-left text-gray-700 font-semibold mb-2">Product Sales</caption>
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

    <p className="text-gray-600 text-sm">
      In this next table, the caption element has been completely removed. While ARIA labelling is present, the lack of a visible or programmatic caption can impact users relying on context provided by captions.
    </p>
    {/* FAIL: Table with no caption */}
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-300">
      <h2 className="text-xl font-semibold mb-4">Project Status Table</h2>
      <table id="projectTable" className="table-auto border-2 border-black w-full" aria-label="Project status tracking table">
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

    <p className="text-gray-600 text-sm">
      Here we demonstrate a properly marked-up HTML table using no ARIA roles, which is the recommended approach for most data tables as native elements already carry the necessary semantics.
    </p>
    {/* PASS: HTML table tags with no role */}
    <section>
      <h2 className="text-xl font-bold mb-2">Team Overview</h2>
      <table className="table-auto w-full border-2 border-black" aria-label="Team member details">
        <caption className="caption-top text-left font-semibold text-gray-600 mb-2">Team Member Ratings</caption>
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

    <p className="text-gray-600 text-sm">
      Below, the table has been assigned <code>role="presentation"</code>, which strips away its semantic meaning for assistive technologies. This is inappropriate for data tables and should fail accessibility checks.
    </p>
    {/* FAIL: Presentation role misuse */}
    <section>
      <h2 className="text-xl font-bold mb-2">Project Assignments</h2>
      <table className="table-auto w-full border-2 border-black" role="presentation">
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

    <p className="text-gray-600 text-sm">
      In this ARIA role misuse example, the table is given <code>role="grid"</code>, which implies interactive spreadsheet-like behavior, but no such functionality exists. This can confuse assistive technology users.
    </p>
    {/* FAIL: ARIA role misuse */}
    <section>
      <h2 className="text-xl font-bold mb-2">Performance Metrics</h2>
      <table className="table-auto w-full border-2 border-black" role="grid">
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

    <p className="text-gray-600 text-sm">
      This ARIA-only table uses <code>role="table"</code>, <code>role="row"</code>, and <code>role="cell"</code> elements without native HTML table tags. When structured correctly, this can still provide accessible semantics.
    </p>
    {/* PASS: ARIA-based data table */}
    <section>
      <h2 className="text-xl font-bold mb-4">ARIA-Based Data Table</h2>
      <div role="table" className="border-2 border-black grid grid-cols-3 w-full" aria-label="Project milestone progress">
        <div role="rowgroup" className="contents">
          <div role="row" className="contents bg-gray-200 font-bold">
            <div role="columnheader" className="border-2 border-black p-2">Milestone</div>
            <div role="columnheader" className="border-2 border-black p-2">Owner</div>
            <div role="columnheader" className="border-2 border-black p-2">Status</div>
          </div>
        </div>
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

    <p className="text-gray-600 text-sm">
      This purely visual table is created with CSS grid and has no semantic HTML or ARIA roles. Assistive technologies will not recognize it as a table.
    </p>
    {/* FAIL: Visual table (no ARIA, no semantics) */}
    <section>
      <h2 className="text-xl font-bold mb-4">Visual Table (No ARIA, No Semantics)</h2>
      <div className="grid grid-cols-3 border-2 border-red-600 w-full">
        <div className="p-2 font-bold border border-gray-400 bg-gray-200">Task</div>
        <div className="p-2 font-bold border border-gray-400 bg-gray-200">Owner</div>
        <div className="p-2 font-bold border border-gray-400 bg-gray-200">Status</div>
        <div className="p-2 border border-gray-300">Wireframes</div>
        <div className="p-2 border border-gray-300">Dana</div>
        <div className="p-2 border border-gray-300">Pending</div>
        <div className="p-2 border border-gray-300">Development</div>
        <div className="p-2 border border-gray-300">Leo</div>
        <div className="p-2 border border-gray-300">In Progress</div>
      </div>
    </section>

    <p className="text-gray-600 text-sm">
      In this final example, the table is presented only as an image or as a CSS background image, both of which remove all structural and semantic information from assistive technologies.
    </p>
    {/* FAIL: Table as image */}
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-300">
      <h2 className="text-xl font-bold mb-4">FAIL: Table as Image</h2>
      <figure>
        <img src="/tablesnip.png" alt="Quarterly sales table screenshot" width={640} height={360} loading="lazy" className="border max-w-full" />
        <figcaption className="mt-1 text-sm text-gray-600">Image of a table (no semantic HTML present)</figcaption>
      </figure>
    </div>

    {/* FAIL: Table as CSS background image */}
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-300">
      <h2 className="text-xl font-bold mb-4">FAIL: Table as CSS Background Image</h2>
      <div aria-label="Background image showing a table" style={{ width: 640, height: 360, backgroundImage: "url('/tablesnip.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className="border" />
      <p className="text-sm text-slate-600 mt-1">Background image of a table (no HTML table semantics)</p>
    </div>
  </div>
);

export default SemanticSimpleTable;
