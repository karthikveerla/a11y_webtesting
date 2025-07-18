import { Routes, Route, Link } from 'react-router-dom';

import SemanticSimpleTable from './pages/SemanticSimpleTable';
import SemanticComplexTable from './pages/SemanticComplexTable';
import LayoutTable from './pages/LayoutTable';
import GridTable from './pages/GridTable';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-90 text-gray-900">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto text-xl font-semibold">Accessibility Testing Ground</div>
      </header>

      <div className="flex flex-grow  bg-gray-200">
        <nav className="w-64 border-r p-6 shadow-md">
          <h2 className="text-lg font-bold mb-4">Test Pages</h2>
          <ul className="space-y-3">
            <li><Link className="text-blue-600 hover:underline" to="/semantic-simple">Semantic Simple Table</Link></li>
            <li><Link className="text-blue-600 hover:underline" to="/semantic-complex">Semantic Complex Table</Link></li>
            <li><Link className="text-blue-600 hover:underline" to="/layout-table">Layout Table</Link></li>
            <li><Link className="text-blue-600 hover:underline" to="/grid-table">Grid Table</Link></li>
          </ul>
        </nav>

        <main className="flex-grow p-8">
          <Routes>
            <Route path="/semantic-simple" element={<SemanticSimpleTable />} />
            <Route path="/semantic-complex" element={<SemanticComplexTable />} />
            <Route path="/layout-table" element={<LayoutTable />} />
            <Route path="/grid-table" element={<GridTable />} />
          </Routes>
        </main>
      </div>

      <footer className="bg-gray-100 text-center text-sm text-gray-600 p-4">
        © 2025 Accessibility Test Hub. Built with React + Tailwind.
      </footer>
    </div>
  );
}

export default App;
