const GridTable = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Grid Table (Non-semantic)</h1>
    <div className="grid grid-cols-4 border-2 border-black">
      <div className="font-bold p-2 border-2 border-black bg-gray-200">Name</div>
      <div className="font-bold p-2 border-2 border-black bg-gray-200">Role</div>
      <div className="font-bold p-2 border-2 border-black bg-gray-200">Location</div>
      <div className="font-bold p-2 border-2 border-black bg-gray-200">Experience</div>

      <div className="p-2 border-2 border-black">Alice</div>
      <div className="p-2 border-2 border-black">Developer</div>
      <div className="p-2 border-2 border-black">NY</div>
      <div className="p-2 border-2 border-black">4 yrs</div>

      <div className="p-2 border-2 border-black">Bob</div>
      <div className="p-2 border-2 border-black">QA Engineer</div>
      <div className="p-2 border-2 border-black">CA</div>
      <div className="p-2 border-2 border-black">3 yrs</div>
    </div>
  </div>
);

export default GridTable;
