import React from 'react';

const HeaderAssociationTestTable = () => {
  return (
    <div>
    <section id="section-header-association" className="p-6 space-y-10 bg-gray-100 text-gray-900">
      <h2 className="text-2xl font-bold mb-6">Header Association and Visibility Checks</h2>

      {/* 1. Complex table with multiple header associations (HTML headers attribute) */}
      <table id="table-multiple-headers" className="table-auto border-2 border-black w-full">
        <caption className="caption-top font-semibold text-gray-700 mb-2">
          Sales Report by Region and Quarter
        </caption>
        <thead className="bg-gray-200">
          <tr>
            <th id="hdr-region" className="border px-4 py-2">Region</th>
            <th id="hdr-q1" className="border px-4 py-2">Q1</th>
            <th id="hdr-q2" className="border px-4 py-2">Q2</th>
            <th id="hdr-total" className="border px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td headers="hdr-region" className="border px-4 py-2">North</td>
            <td headers="hdr-region hdr-q1" className="border px-4 py-2">$10K</td>
            <td headers="hdr-region hdr-q2" className="border px-4 py-2">$12K</td>
            <td headers="hdr-region hdr-total" className="border px-4 py-2">$22K</td>
          </tr>
          <tr>
            <td headers="hdr-region" className="border px-4 py-2">South</td>
            <td headers="hdr-region hdr-q1" className="border px-4 py-2">$8K</td>
            <td headers="hdr-region hdr-q2" className="border px-4 py-2">$9K</td>
            <td headers="hdr-region hdr-total" className="border px-4 py-2">$17K</td>
          </tr>
        </tbody>
      </table>
        <section id="section-multiple-header-fail">
  <h2 className="text-xl font-bold mb-2">Broken Header Association</h2>
  <table id="table-multiple-headers-fail" className="table-auto w-full border border-red-600">
    <thead className="bg-gray-200">
      <tr>
        <th id="col1" className="border px-4 py-2">Quarter</th>
        <th id="col2" className="border px-4 py-2">Product A</th>
        <th id="col3" className="border px-4 py-2">Product B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-2">Q1</td>
        {/* ❌ Incorrect headers attribute: referencing IDs that do not exist */}
        <td className="border px-4 py-2" headers="nonexistent1">10K</td>
        <td className="border px-4 py-2" headers="col2 colX">8K</td> {/* colX does not exist */}
      </tr>
    </tbody>
  </table>
</section>


      {/* 2. Low contrast header text */}
      <table id="table-low-contrast-header" className="table-auto border-2 border-black w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2" style={{ color: '#CCCCCC', backgroundColor: '#EEEEEE' }}>
              Product
            </th>
            <th className="border px-4 py-2">Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Item A</td>
            <td className="border px-4 py-2">$500</td>
          </tr>
        </tbody>
      </table>

      {/* 3. Header obscured by overlay */}
      <div id="table-overlay-header-wrapper" className="relative">
        <table id="table-overlay-header" className="table-auto border-2 border-black w-full">
          <thead className="bg-white relative z-10">
            <tr>
              <th className="border px-4 py-2">Obscured Header</th>
              <th className="border px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Item B</td>
              <td className="border px-4 py-2">$700</td>
            </tr>
          </tbody>
        </table>
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-10 bg-white opacity-90 z-20 border-b border-gray-500">
          <p className="text-sm text-gray-500 text-center pt-1">Floating UI covering headers</p>
        </div>
      </div>
    </section>
            <section id="section-bg-image-header" className="mb-12">
        <h2 className="text-xl font-bold mb-2">4. Header on Background Image</h2>
        <table
            id="table-background-image-header"
            className="table-auto w-full border border-gray-400"
        >
            <thead>
            <tr
                className="bg-cover bg-center text-white"
                style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80')`,
                }}
            >
                <th className="px-4 py-3 border">Department</th>
                <th className="px-4 py-3 border">Employees</th>
                <th className="px-4 py-3 border">Budget</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="px-4 py-2 border">Engineering</td>
                <td className="px-4 py-2 border">42</td>
                <td className="px-4 py-2 border">$3M</td>
            </tr>
            <tr>
                <td className="px-4 py-2 border">Design</td>
                <td className="px-4 py-2 border">15</td>
                <td className="px-4 py-2 border">$1M</td>
            </tr>
            </tbody>
        </table>
        </section>
    </div>
  );
};

export default HeaderAssociationTestTable;
