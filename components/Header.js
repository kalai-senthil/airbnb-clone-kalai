import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex h-10 items-center cursor-pointer my-auto">
        <Image
          objectFit="contain"
          objectPosition="left"
          src="https://links.papareact.com/qd3"
          layout="fill"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full p-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-1 text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="h-8 md:mx-auto text-white cursor-pointer bg-red-400 rounded-full p-2 hidden md:inline-flex" />
      </div>
      <div className="flex space-x-4 items-center justify-end">
        <p className="hidden md:inline text-center">Become a host</p>
        <GlobeAltIcon className="h-8" />
        <div className="flex items-center space-x-2 rounded-full border-2 p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
