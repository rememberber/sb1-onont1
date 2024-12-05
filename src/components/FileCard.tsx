import React from 'react';
import { FileItem } from '../types/file';
import { 
  Image, FileText, Video, Music, 
  FileIcon, Files, Trash2
} from 'lucide-react';
import { useFileStore } from '../store/useFileStore';

const iconMap = {
  image: Image,
  audio: Music,
  video: Video,
  document: FileIcon,
  article: Files,
  text: FileText,
};

interface FileCardProps {
  file: FileItem;
}

export function FileCard({ file }: FileCardProps) {
  const { removeFile } = useFileStore();
  const Icon = iconMap[file.type];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <Icon className="w-8 h-8 text-gray-500" />
          <div>
            <h3 className="font-medium text-gray-900 truncate max-w-[200px]">
              {file.name}
            </h3>
            <p className="text-sm text-gray-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        </div>
        <button
          onClick={() => removeFile(file.id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
      {file.aiSummary && (
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {file.aiSummary}
        </p>
      )}
      {file.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {file.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}