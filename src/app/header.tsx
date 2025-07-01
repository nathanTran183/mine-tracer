import Image from 'next/image';
import Icon from '../../public/Icon.png';
import Link from 'next/link';

export const Header = () => {
  const menu = [{ id: 1, title: 'Map', site: '/map' }];

  return (
    <header className={`w-full fixed top-0 left-0 z-20 justify-center`}>
      <nav className="w-full bg-gray-600">
        <ul className="w-3/4 mx-auto flex justify-end">
          <li>Login</li>
          <li>Signup</li>
        </ul>
      </nav>
      <nav className="w-full justify-center bg-gray-400">
        <div className="w-3/4 mx-auto">
          <div className="grid grid-cols-12 w-full">
            <div className="col-span-8 justify-items-start max-h-20">
              <Link href="/">
                <Image
                  alt="Mine Tracer Icon"
                  src={Icon}
                  className="h-full w-auto object-contain"
                />
              </Link>
            </div>
            <div className="col-span-4 relative py-2 flex h-full items-center">
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Search Mine site, minerals..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-500 hover:cursor-pointer rounded-e-lg border border-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
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
              </div>
            </div>
          </div>
          <div>
            <ul className="items-end flex text-black ">
              {menu.map((m) => (
                <li key={m.id}>
                  <Link href={m.site}>{m.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
