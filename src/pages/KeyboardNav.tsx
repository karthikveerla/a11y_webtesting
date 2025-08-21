import React from "react";

const KeyboardNav = () => (
  <div className="space-y-12 p-6">
    <section>
      <h1 className="text-2xl font-bold mb-2">1. Keyboard Navigable Grid Table (Correct)</h1>
      <p className="text-gray-700 mb-4">
        This is a fully accessible grid table with interactive elements in each row. Keyboard navigation and reverse navigation using <code>Tab</code> and <code>Shift+Tab</code> work as expected.
      </p>
      <div
        role="table"
        id="accessible-grid-table"
        aria-label="Employee actions table"
        className="border border-black w-full grid grid-cols-5"
      >
        <div role="rowgroup" className="contents">
          <div role="row" className="contents font-bold bg-gray-100">
            <div role="columnheader" className="border border-black p-2">Name</div>
            <div role="columnheader" className="border border-black p-2">Email</div>
            <div role="columnheader" className="border border-black p-2">View</div>
            <div role="columnheader" className="border border-black p-2">Edit</div>
            <div role="columnheader" className="border border-black p-2">Delete</div>
          </div>
        </div>
        <div role="rowgroup" className="contents">
          <div role="row" className="contents">
            <div role="cell" className="border border-black p-2">Alice</div>
            <div role="cell" className="border border-black p-2">alice@example.com</div>
            <div role="cell" className="border border-black p-2"><button className="underline">View</button></div>
            <div role="cell" className="border border-black p-2"><a href="#" className="text-blue-600">Edit</a></div>
            <div role="cell" className="border border-black p-2"><button className="text-red-600">Delete</button></div>
          </div>
          <div role="row" className="contents">
            <div role="cell" className="border border-black p-2">Bob</div>
            <div role="cell" className="border border-black p-2">bob@example.com</div>
            <div role="cell" className="border border-black p-2"><button>View</button></div>
            <div role="cell" className="border border-black p-2"><a href="#">Edit</a></div>
            <div role="cell" className="border border-black p-2"><button>Delete</button></div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-2">2. Table with Broken Keyboard Navigation</h2>
      <p className="text-gray-700 mb-4">
        This table visually appears correct but contains <code>span</code> elements that are not focusable, causing keyboard navigation to fail.
      </p>
      <table id="broken-keyboard-table" className="table-auto w-full border border-black">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-black p-2">Task</th>
            <th className="border border-black p-2">Status</th>
            <th className="border border-black p-2">Link</th>
            <th className="border border-black p-2">Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black p-2">Design</td>
            <td className="border border-black p-2">In Progress</td>
            <td className="border border-black p-2"><span><a>Click me</a></span></td>
            <td className="border border-black p-2">Alex</td>
          </tr>
          <tr>
            <td className="border border-black p-2">Testing</td>
            <td className="border border-black p-2">Done</td>
            <td className="border border-black p-2"><span>Review</span></td>
            <td className="border border-black p-2">Jamie</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-2">3. Table with Broken Reverse Navigation</h2>
      <p className="text-gray-700 mb-4">
        This table has a hidden input trap that consumes <code>Shift+Tab</code>, preventing users from reversing focus order.
      </p>
      <table id="broken-reverse-table" className="table-auto w-full border border-black">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-black p-2">Milestone</th>
            <th className="border border-black p-2">Due</th>
            <th className="border border-black p-2">Input</th>
            <th className="border border-black p-2">Assigned</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black p-2">Phase 1</td>
            <td className="border border-black p-2">2025-09-01</td>
            <td className="border border-black p-2"><input onKeyDown={(e) => {
              if (e.shiftKey && e.key === 'Tab') {
                e.preventDefault();
              }
            }} className="border p-1" /></td>
            <td className="border border-black p-2">Tina</td>
          </tr>
          <tr>
            <td className="border border-black p-2">Phase 2</td>
            <td className="border border-black p-2">2025-10-15</td>
            <td className="border border-black p-2"><input onKeyDown={(e) => {
              if (e.shiftKey && e.key === 'Tab') {
                e.preventDefault();
              }
            }} className="border p-1" /></td>
            <td className="border border-black p-2">Rob</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default KeyboardNav;
