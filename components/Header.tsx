import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="max-w-7xl mx-auto bg-sky-200 flex items-center justify-between p-5 sticky top-0 z-50">
      <Link href="/">
        <img
          className="w-44 object-contain cursor-pointer"
          src="https://links.papareact.com/yvf"
        />
      </Link>
      <div className="hidden md:inline-flex items-center space-x-2 font-semibold">
        <Link href="/">
          <h3 className="hover:bg-sky-300 transform active:bg-sky-600 duration-200 ease-in-out px-6 cursor-pointer py-2 rounded-md">
            Home
          </h3>
        </Link>
        <Link href="/post/article">
          <h3 className="hover:bg-sky-300 transform active:bg-sky-600 duration-200 ease-in-out px-6 cursor-pointer py-2 rounded-md">
            Contribute
          </h3>
        </Link>
        <h3 className="hover:bg-sky-300 transform active:bg-sky-600 duration-200 ease-in-out px-6 cursor-pointer py-2 rounded-md">
          Follow
        </h3>
      </div>
      <div className="flex items-center space-x-2 text-Zinc-900">
        <Link href="/post/login">
          <h3 className="font-semibold hover:bg-sky-300 transform active:bg-sky-600 duration-200 ease-in-out px-6 cursor-pointer py-2 rounded-md">
            Sign In
          </h3>
        </Link>
        <h3
          className="border px-3 py-2 rounded-md border-sky-600
        hover:bg-sky-300 transform active:bg-sky-600 duration-200 ease-in-out cursor-pointer"
        >
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;
