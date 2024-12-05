import React from 'react';
import { useFileStore } from '../store/useFileStore';
import { FileCard } from './FileCard';

export function FileGrid() {
  const { files, selectedType, searchQuery } = useFileStore();

  const filteredFiles = files.filter(file => {
    const matchesType = selectedType === 'all' || file.type === selectedType;
    const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {filteredFiles.map((file) => (
        <FileCard key={file.id} file={file} />
      ))}
    </div>
  );
}