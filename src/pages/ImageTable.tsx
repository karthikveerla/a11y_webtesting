// WCAG Tables Test Page (Baseline)
// - Mix of tables with paragraphs in between
// - 4×4 data by default
// - Stable hooks via data-testid attributes
// - Clean baseline (no intentional failures yet) so we can inject per test case
// - Tailwind for styling

import React from "react";

// Small helpers to keep data compact
const headers = ["Q1", "Q2", "Q3"];
const rows = [
  ["Alpha", 120, 98, 143],
  ["Beta", 88, 110, 121],
  ["Gamma", 101, 99, 130],
  ["Delta", 77, 95, 118],
];

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="my-6 text-sm leading-6 text-zinc-700">
      {children}
    </p>
  );
}

// function SectionTitle({ children, id }: { children: React.ReactNode; id: string }) {
//   return (
//     <h2 id={id} className="mt-10 mb-3 text-xl font-semibold tracking-tight">
//       {children}
//     </h2>
//   );
// }

// /**
//  * 1) Semantic Simple Data Table
//  * - Single header row
//  * - 4×4 body
//  */
// function SemanticSimpleTable() {
//   return (
//     <figure className="my-4" data-testid="tbl-semantic-simple">
//       <figcaption className="mb-2 text-sm text-zinc-600">
//         Quarterly Scores — Semantic Simple
//       </figcaption>
//       <table className="w-full border border-zinc-300 text-sm" aria-label="Quarterly scores (semantic simple)">
//         <thead className="bg-zinc-50">
//           <tr>
//             <th scope="col" className="border border-zinc-300 p-2 text-left">Team</th>
//             {headers.map((h) => (
//               <th scope="col" key={h} className="border border-zinc-300 p-2 text-left">
//                 {h}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((r, i) => (
//             <tr key={i}>
//               <th scope="row" className="border border-zinc-300 p-2 text-left font-medium">{r[0]}</th>
//               <td className="border border-zinc-300 p-2">{r[1]}</td>
//               <td className="border border-zinc-300 p-2">{r[2]}</td>
//               <td className="border border-zinc-300 p-2">{r[3]}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </figure>
//   );
// }

// /**
//  * 2) Semantic Complex Data Table
//  * - Two-level column headers using colspan
//  * - Row headers present
//  */
// function SemanticComplexTable() {
//   return (
//     <figure className="my-4" data-testid="tbl-semantic-complex">
//       <figcaption className="mb-2 text-sm text-zinc-600">
//         Regional Totals — Semantic Complex (Grouped Columns)
//       </figcaption>
//       <table className="w-full border border-zinc-300 text-sm" aria-label="Regional totals (semantic complex)">
//         <thead className="bg-zinc-50">
//           <tr>
//             <th scope="col" rowSpan={2} className="border border-zinc-300 p-2 text-left">Region</th>
//             <th scope="col" colSpan={2} className="border border-zinc-300 p-2 text-left">H1</th>
//             <th scope="col" colSpan={2} className="border border-zinc-300 p-2 text-left">H2</th>
//           </tr>
//           <tr>
//             <th scope="col" className="border border-zinc-300 p-2 text-left">Q1</th>
//             <th scope="col" className="border border-zinc-300 p-2 text-left">Q2</th>
//             <th scope="col" className="border border-zinc-300 p-2 text-left">Q3</th>
//             <th scope="col" className="border border-zinc-300 p-2 text-left">Q4</th>
//           </tr>
//         </thead>
//         <tbody>
//           {[
//             ["North", 35, 42, 39, 44],
//             ["South", 33, 40, 36, 41],
//             ["East", 37, 43, 38, 45],
//             ["West", 31, 39, 35, 40],
//           ].map((r, i) => (
//             <tr key={i}>
//               <th scope="row" className="border border-zinc-300 p-2 text-left font-medium">{r[0]}</th>
//               <td className="border border-zinc-300 p-2">{r[1]}</td>
//               <td className="border border-zinc-300 p-2">{r[2]}</td>
//               <td className="border border-zinc-300 p-2">{r[3]}</td>
//               <td className="border border-zinc-300 p-2">{r[4]}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </figure>
//   );
// }

// /**
//  * 3) Layout Table (using <table> but for layout-only content)
//  * - Marked with role="presentation" so AT treats it as layout
//  * - Useful baseline to later inject misuse (e.g., wrong roles/headers)
//  */
// function LayoutTable() {
//   return (
//     <figure className="my-4" data-testid="tbl-layout">
//       <figcaption className="mb-2 text-sm text-zinc-600">Layout Grid (presentation)</figcaption>
//       <table role="presentation" className="w-full border border-dashed border-zinc-300 text-sm" aria-label="Layout grid (presentation)">
//         <tbody>
//           {Array.from({ length: 4 }).map((_, r) => (
//             <tr key={r}>
//               {Array.from({ length: 4 }).map((_, c) => (
//                 <td key={c} className="border border-zinc-200 p-3 align-top">
//                   <div className="text-xs font-medium text-zinc-600">Block {r + 1}-{c + 1}</div>
//                   <div className="text-xs text-zinc-500">Lorem ipsum dolor sit amet.</div>
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </figure>
//   );
// }

// /**
//  * 4) Grid Table (non-semantic, CSS grid)
//  * - Baseline: ARIA role="table" with columnheader/cell roles
//  * - Later we can drop roles or captions to create failures
//  */
// function GridTable() {
//   const cells = ["Name", "Mon", "Tue", "Wed", "Ava", 12, 10, 14, "Bo", 11, 9, 13, "Cal", 10, 12, 15, "Dia", 9, 8, 12];
//   return (
//     <figure className="my-4" data-testid="tbl-grid">
//       <figcaption className="mb-2 text-sm text-zinc-600">Attendance — Grid Role Table</figcaption>
//       <div
//         role="table"
//         aria-label="Attendance grid"
//         className="grid grid-cols-4 gap-px bg-zinc-300 text-sm"
//       >
//         {cells.map((txt, i) => (
//           <div
//             key={i}
//             role={i < 4 ? "columnheader" : (i % 4 === 0 ? "rowheader" : "cell")}
//             className="bg-white p-2"
//           >
//             {String(txt)}
//           </div>
//         ))}
//       </div>
//     </figure>
//   );
// }

// function Table_Fail_ImageOnly() {
//   return (
//     <section data-testid="tbl-fail-image-only" aria-labelledby="t7-title" className="mt-4">
//       <h2 id="t7-title" className="text-base font-medium mb-2">FAIL: Table as image (no HTML semantics)</h2>
//       <figure>
//         <img
//           src="/tablesnip.png"
//           alt="Quarterly sales table screenshot"
//           className="border"
//         />
//         <figcaption className="mt-1 text-sm text-gray-600">
//           Image of a table (should fail semantic table detection)
//         </figcaption>
//       </figure>
//     </section>
//   );
// }

export default function ImageTable() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold tracking-tight">WCAG Tables — Baseline Test Page</h1>

      <Paragraph>
        This page contains multiple table styles separated by short paragraphs so you can run
        accessibility checks, inject failures, and validate UI/DOM parity. By default everything is
        set up to pass; we’ll introduce specific failures per test case you provide.
      </Paragraph>

          <p className="text-gray-600 text-sm">
      In this final example, the table is presented only as an image or as a CSS background image, both of which remove all structural and semantic information from assistive technologies.
    </p>
    {/* FAIL: Table as image */}
    <div id="tbl-image-only" className="bg-white rounded-xl shadow-md p-6 border border-gray-300">
      <h2 className="text-xl font-bold mb-4">FAIL: Table as Image</h2>
      <figure>
        <img src="/tablesnip.png" alt="Quarterly sales table screenshot" width={640} height={360} loading="lazy" className="border max-w-full" />
        <figcaption className="mt-1 text-sm text-gray-600">Image of a table (no semantic HTML present)</figcaption>
      </figure>
    </div>
    </main>
  );
}
