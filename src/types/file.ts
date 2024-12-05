export type FileType = 'image' | 'audio' | 'video' | 'document' | 'article' | 'text';

export interface FileItem {
  id: string;
  name: string;
  type: FileType;
  size: number;
  path: string;
  lastModified: number;
  tags: string[];
  aiSummary?: string;
}