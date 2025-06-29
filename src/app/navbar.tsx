export const Navbar = () => {
  return (
    <header className={`w-full top-0 right-0 lg:px-8 justify-center`}>
      <nav className="w-full bg-gray-600">
        <ul className="w-3/4  mx-auto flex justify-end">
          <li>Login</li>
          <li>Signup</li>
        </ul>
      </nav>
      <nav className="w-full justify-center bg-gray-500">
        <div className="w-3/4 mx-auto bg-green-500">
          <div className="grid grid-cols-12 w-full bg-gray-400">
            <div className="col-span-8">
              <h1>Icon</h1>
            </div>
            <div className="col-span-4 relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Search
              </button>
            </div>
          </div>
          <div>
            <ul className="items-end flex text-black ">
              <li>
                <a>tab 1</a>
              </li>
              <li>tab 2</li>
              <li>tab 3</li>
              <li>tab 4</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
