import React from 'react';
import { FileType } from '../types/file';
import { useFileStore } from '../store/useFileStore';
import { 
  Image, FileText, Video, Music, 
  FileIcon, Files, Layout
} from 'lucide-react';
import { cn } from '../utils/cn';
import { AIModelSelector } from './AIModelSelector';

const fileTypes: { type: FileType | 'all'; icon: React.ElementType; label: string }[] = [
  { type: 'all', icon: Layout, label: 'All Files' },
  { type: 'image', icon: Image, label: 'Images' },
  { type: 'audio', icon: Music, label: 'Audio' },
  { type: 'video', icon: Video, label: 'Videos' },
  { type: 'document', icon: FileIcon, label: 'Documents' },
  { type: 'article', icon: Files, label: 'Articles' },
  { type: 'text', icon: FileText, label: 'Text' },
];

export function Sidebar() {
  const { selectedType, setSelectedType } = useFileStore();

  return (
    <div className="w-64 bg-white h-full border-r border-gray-200 p-4">
      <h2 className="text-xl font-semibold mb-6">MooContext</h2>
      
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">AI Model</h3>
        <AIModelSelector />
      </div>

      <nav className="space-y-1">
        {fileTypes.map(({ type, icon: Icon, label }) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={cn(
              "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm",
              selectedType === type
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-50"
            )}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}