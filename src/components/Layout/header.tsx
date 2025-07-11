'use client';

import Image from 'next/image';
import Icon from '../../../public/Icon.png';
import IconText from '../../../public/Icon-Text.png';
import Link from 'next/link';
import SearchBar from '../features/SearchBar/SearchBar';
import { usePathname } from 'next/navigation';

interface MenuBar {
  title: string;
  href: string;
}

export const Header = () => {
  const pathName = usePathname();
  const leftMenu: MenuBar[] = [
    { title: 'Portal', href: '/' },
    { title: 'Mine Type', href: '/mine-type' },
    { title: 'Help', href: '/help' },
    { title: 'About Us', href: '/about' },
    { title: 'Privacy Policy', href: '/privacy-policy' },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-20 justify-center`}>
      <nav className="w-full justify-center bg-gray-400">
        <div className="w-3/4 mx-auto">
          <div className="grid grid-cols-12 w-full">
            <div className="col-span-8 max-h-20 h-20 flex">
              <Link href="/" className="flex h-full justify-items-start">
                <Image
                  alt="Mine Tracer Icon"
                  src={Icon}
                  className="h-full w-auto object-contain"
                />
                <Image
                  src={IconText}
                  className="h-full w-auto object-contain"
                  alt="Mine Tracer Icon Text"
                />
              </Link>
            </div>
            <div className="col-span-4 relative py-2 flex h-full items-center">
              <div className="relative w-full">
                <SearchBar />
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex space-x-1 justify-items-start w-full">
              {leftMenu.map((m, idx) => (
                <Link
                  className={`px-3 py-2 border-b-4 text-sm font-medium hover:border-b-gray-300 hover:text-gray-300
                  ${
                    pathName == m.href
                      ? 'border-b-gray-300 text-gray-300 dark:text-gray-300'
                      : 'border-b-gray-400 text-white dark:text-black'
                  } `}
                  key={idx}
                  href={m.href}
                >
                  {m.title}
                </Link>
              ))}
            </div>
            <div className="flex justify-end">
              <ul className="flex space-x-4">
                <Link
                  href="/login"
                  className="px-3 py-2 text-sm font-medium text-white dark:text-black hover:border-b-4 hover:border-b-gray-300 hover:text-gray-300"
                >
                  Login
                </Link>
                <Link
                  href="/sign-up"
                  className="px-3 py-2 text-sm font-medium text-white dark:text-black hover:border-b-4 hover:border-b-gray-300 hover:text-gray-300"
                >
                  Signup
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
