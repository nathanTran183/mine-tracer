'use client';

import Image from 'next/image';
import Icon from '../../public/Icon.png';
import IconText from '../../public/Icon-Text.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuBar {
  title: string,
  href: string,
}

export const Header = () => {
  const pathName = usePathname();
  const leftMenu: MenuBar[] = [
    { title: 'Portal', href: '/' },
    { title: 'Mine Type', href: '/mine-type' },
    { title: 'Help', href: '/help' },
    { title: 'About Us', href: '/about-us' },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-20 justify-center`}>
      <nav className="w-full justify-center bg-gray-400">
        <div className="w-3/4 mx-auto">
          <div className="grid grid-cols-12 w-full">
            <div className="col-span-8 max-h-20 h-20 flex">
              <Link href="/" className='flex h-full justify-items-start'>
                <Image
                  alt="Mine Tracer Icon"
                  src={Icon}
                  className="h-full w-auto object-contain"
                />
                <Image src={IconText} className="h-full w-auto object-contain" alt='Mine Tracer Icon Text' />
              </Link>
            </div>
            <div className="col-span-4 relative py-2 flex h-full items-center">
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm rounded-md text-gray-900 bg-gray-50  border-s-gray-50 border-s-2 border border-gray-300 dark:bg-gray-800 outline-none dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Search Mine site, minerals..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-500 hover:cursor-pointer rounded-e-md border border-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
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
          <div className='flex flex-row'>
            <div className='flex space-x-1 justify-items-start w-full'>
              {leftMenu.map((m, idx) => (
                <Link className={`px-3 py-2 border-b-4 text-sm font-medium  text-white dark:text-black hover:border-b-gray-300 hover:text-gray-300
                  ${pathName == m.href ? 'border-b-gray-300' : 'border-b-gray-400'} `}
                  key={idx} href={m.href}>{m.title}</Link>
              ))}
            </div>
            <div className='flex justify-end'>
              <ul className="flex space-x-4">
                <Link href='/login' className='px-3 py-2 text-sm font-medium text-white dark:text-black hover:border-b-4 hover:border-b-gray-300 hover:text-gray-300'>Login</Link>
                <Link href='/sign-up' className='px-3 py-2 text-sm font-medium text-white dark:text-black hover:border-b-4 hover:border-b-gray-300 hover:text-gray-300'>Signup</Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
