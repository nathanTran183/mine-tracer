const SearchBar = () => {
  return (
    <form className="max-w-md mx-auto">
      <input
        type="search"
        id="search-dropdown"
        className="block p-2.5 w-full z-20 text-sm rounded-md text-gray-900 bg-gray-50  border-s-gray-50 border-s-2 border border-gray-300 dark:bg-gray-800 outline-none dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
        placeholder="Search Mine site, minerals..."
        required
      />
      <button
        type="submit"
        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-500 hover:cursor-pointer rounded-e-md border border-white dark:border-black hover:bg-gray-600 focus:outline-none"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
