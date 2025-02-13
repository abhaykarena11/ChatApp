import useSearch from "../../statemanage/useSearch";
export default function Search() {
  const {searchText,setSearchText} = useSearch();
  return (
<form className="flex items-center">
    <label className="input input-bordered flex items-center gap-2 w-[85%] mx-auto">
    <input type="text" className="grow" placeholder="Search" onChange={(e)=>setSearchText(e.target.value)} value={searchText}/>
    </label>
    <div className="hover:bg-gray-700 hover:rounded-full duration-300 w-9 h-9 flex items-center cursor-pointer">
    </div>
  </form>
  )
}
