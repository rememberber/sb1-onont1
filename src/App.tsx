import React from 'react';
import { Sidebar } from './components/Sidebar';
import { FileGrid } from './components/FileGrid';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <SearchBar />
          <FileGrid />
        </div>
      </main>
    </div>
  );
}

export default App;