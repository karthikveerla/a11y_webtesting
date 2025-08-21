// import React from "react";

const LayoutTable = () => {
  return (
    <div className="p-8 space-y-12 max-w-5xl mx-auto bg-gray-100 min-h-screen font-sans text-gray-800">
      
      {/* App Header */}
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-2">True Layout Table Playground</h1>
        <p className="text-center text-lg text-gray-600">
          This page contains examples of tables used purely for visual layout. A correct AI analysis should classify these as "layout tables" and ignore their internal structure for semantic purposes.
        </p>
      </div>

      <main className="space-y-8">

        {/* Scenario 1: A Login Form Layout Table with role="grid" */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-6">Login Form Layout</h2>
          <p className="text-gray-600 mb-6">
            This table is used to align form elements and should be considered a layout table. without role=presenattion attribute
          </p>
          <form className="max-w-sm mx-auto">
            <table id="login-form-layout" className="w-full">
              <tbody>
                <tr className="h-16">
                  <td className="w-1/3 p-2 text-right font-semibold">Username:</td>
                  <td className="w-2/3 p-2">
                    <input type="text" id="username" className="w-full border border-gray-300 rounded-lg p-2" />
                  </td>
                </tr>
                <tr className="h-16">
                  <td className="w-1/3 p-2 text-right font-semibold">Password:</td>
                  <td className="w-2/3 p-2">
                    <input type="password" id="password" className="w-full border border-gray-300 rounded-lg p-2" />
                  </td>
                </tr>
                <tr className="h-16">
                  <td></td>
                  <td className="p-2">
                    <button type="submit" className="w-full bg-indigo-600 text-white font-bold p-3 rounded-lg hover:bg-indigo-700 transition-colors">Log In</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>

        {/* Scenario 2: A Three-Column Content Layout Table with role="grid" */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-6">Three-Column Content Layout</h2>
          <p className="text-gray-600 mb-6">
            Proper table tags and role = grid<br/>
            This table is used to create a multi-column layout for visual purposes. It has no meaningful data relationships and should be correctly identified as a layout table.
          </p>
          <table id="content-columns-layout" role="grid" className="w-full table-fixed">
            <tbody>
              <tr>
                <td className="p-4 align-top">
                  <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </td>
                <td className="p-4 align-top">
                  <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
                  <p className="text-gray-700">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </td>
                <td className="p-4 align-top">
                  <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
                  <p className="text-gray-700">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Scenario 3: A Simple Two-Column Layout Table with role="table" */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-6">Simple Two-Column Layout</h2>
          <p className="text-gray-600 mb-6">
            This table is used for a simple key-value layout. When using `role="table"`, an AI should identify its semantic structure, even though it is being used for layout.
            <br/>table Tags with role = table
          </p>
          <table id="simple-table-layout" role="table" className="w-full max-w-lg mx-auto">
            <tbody>
              <tr>
                <td className="w-1/2 p-4 font-semibold border-b border-gray-300">Name:</td>
                <td className="w-1/2 p-4 border-b border-gray-300">John Doe</td>
              </tr>
              <tr>
                <td className="w-1/2 p-4 font-semibold">Email:</td>
                <td className="w-1/2 p-4">john.doe@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Scenario 4: layout table without any tags or roles*/}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-6">personal details</h2>
          <p className="text-gray-600 mb-6">
            This table is built with `div` and `span` elements.<br/>Layout table without any tags or roles
          </p>
          <div id="aria-layout-fail"  aria-label="ARIA-based non-native table" className="w-full max-w-lg mx-auto border border-gray-300">
            <div role="row" className="flex">
              <span role="columnheader" className="w-1/2 p-4 font-semibold border-b border-r border-gray-300">Name:</span>
              <span role="cell" className="w-1/2 p-4 border-b border-gray-300">John Doe</span>
            </div>
            <div role="row" className="flex">
              <span role="columnheader" className="w-1/2 p-4 font-semibold border-r border-gray-300">Email:</span>
              <span role="cell" className="w-1/2 p-4">john.doe@example.com</span>
            </div>
          </div>
        </div>
        
      </main>
      
      <footer className="bg-white rounded-3xl shadow-xl p-6 text-center text-gray-600">
        <p>Example page for layout table analysis.</p>
      </footer>
      
    </div>
  );
};

export default LayoutTable;
