import { create } from 'zustand';
import { AIModel, AISettings } from '../types/ai';

interface AIStore extends AISettings {
  setSelectedModel: (modelId: string) => void;
  addModel: (model: AIModel) => void;
  removeModel: (modelId: string) => void;
}

const defaultModels: AIModel[] = [
  {
    id: 'gpt-4',
    name: 'GPT-4',
    type: 'cloud',
    description: 'OpenAI\'s most advanced model'
  },
  {
    id: 'llama-2',
    name: 'Llama 2',
    type: 'local',
    description: 'Meta\'s open source LLM'
  },
  {
    id: 'claude-2',
    name: 'Claude 2',
    type: 'cloud',
    description: 'Anthropic\'s advanced AI assistant'
  }
];

export const useAIStore = create<AIStore>((set) => ({
  selectedModel: defaultModels[0].id,
  models: defaultModels,
  setSelectedModel: (modelId) => set({ selectedModel: modelId }),
  addModel: (model) => set((state) => ({
    models: [...state.models, model]
  })),
  removeModel: (modelId) => set((state) => ({
    models: state.models.filter((model) => model.id !== modelId),
    selectedModel: state.selectedModel === modelId 
      ? defaultModels[0].id 
      : state.selectedModel
  }))
}));