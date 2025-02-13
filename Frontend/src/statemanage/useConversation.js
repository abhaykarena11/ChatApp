import { create } from 'zustand'

const useConversation = create((set) => ({
  selectedConversation : 0,
  setSelectedConversation: (selectedConversation) => set({selectedConversation}),
  messages:[],
  setMessages:(messages) => set({messages}),
}));

export default useConversation;