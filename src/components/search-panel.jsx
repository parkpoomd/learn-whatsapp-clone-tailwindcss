import { FilterIcon, SearchIcon } from "../assets/icons";

export default function SearchPanel() {
  return (
    <div className="bg-white space-x-2 px-4 py-2 flex items-center border-b border-[#e2e8f0]">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
        />
      </div>
      <button type="button" className="bg-[#edf2f7] p-2.5 rounded-md">
        <FilterIcon />
      </button>
    </div>
  );
}
