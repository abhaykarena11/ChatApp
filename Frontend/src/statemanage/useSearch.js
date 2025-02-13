import { create } from 'zustand'

const useSearch = create((set) => ({
  searchText:"",
  setSearchText:(searchText)=>set({searchText})
}));

export default useSearch;