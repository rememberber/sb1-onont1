export interface AIModel {
  id: string;
  name: string;
  type: 'local' | 'cloud';
  description: string;
}

export interface AISettings {
  selectedModel: string;
  models: AIModel[];
}