import { create } from 'zustand';
import { FileItem, FileType } from '../types/file';

interface FileStore {
  files: FileItem[];
  selectedType: FileType | 'all';
  searchQuery: string;
  addFile: (file: FileItem) => void;
  removeFile: (id: string) => void;
  setSelectedType: (type: FileType | 'all') => void;
  setSearchQuery: (query: string) => void;
}

export const useFileStore = create<FileStore>((set) => ({
  files: [],
  selectedType: 'all',
  searchQuery: '',
  addFile: (file) => set((state) => ({ files: [...state.files, file] })),
  removeFile: (id) => set((state) => ({
    files: state.files.filter((file) => file.id !== id)
  })),
  setSelectedType: (type) => set({ selectedType: type }),
  setSearchQuery: (query) => set({ searchQuery: query })
}));