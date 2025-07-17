const GridTable = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Grid Table (Non-semantic)</h1>
    <div className="grid grid-cols-4 border border-gray-300">
      <div className="font-bold p-2 border bg-gray-200">Name</div>
      <div className="font-bold p-2 border bg-gray-200">Role</div>
      <div className="font-bold p-2 border bg-gray-200">Location</div>
      <div className="font-bold p-2 border bg-gray-200">Experience</div>

      <div className="p-2 border">Alice</div>
      <div className="p-2 border">Developer</div>
      <div className="p-2 border">NY</div>
      <div className="p-2 border">4 yrs</div>

      <div className="p-2 border">Bob</div>
      <div className="p-2 border">QA Engineer</div>
      <div className="p-2 border">CA</div>
      <div className="p-2 border">3 yrs</div>
    </div>
  </div>
);
export default GridTable;
