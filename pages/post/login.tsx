import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { LogoImage } from "../../public/assets";
import Image from "next/image";

function login() {
  return (
    <div>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Link href="/" passHref>
              <div>
                <Image
                  height={100}
                  className="cursor-pointer shadow-cyan-600 shadow space-y-2"
                  src={LogoImage}
                  alt="LogoImage"
                />
              </div>
            </Link>
            <h2 className="mt-6 text-center font-titleFont font-bold text-[32px] text-gray-900">
              Sign in to your account
            </h2>
            <Link href="/" passHref>
              <p className="mt-2 text-center text-sm font-medium text-cyan-600 hover:text-cyan-500">
                Don't have an Account Contact to Admin
              </p>
            </Link>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px ">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border mb-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 labelTextInput"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 labelTextInput"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block font-bodyFont text-[16px] text-primary "
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:text-cyan-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent font-bodyFont font-semibold text-[16px] rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-v-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-white group-hover:text-white"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
              <div className="text-center pt-2.5">
                <h4>
                  Forgot Email
                  <span className="font-bold hover:cursor-pointer text-red-500 ml-1 hover:text-red-800 duration-300">
                    Reset
                  </span>
                </h4>
              </div>
              <Link href="/" passHref>
                <button className="group relative w-full mt-5 flex justify-center py-2 px-4 border border-transparent font-bodyFont font-semibold text-[16px] rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-white group-hover:text-white"
                      aria-hidden="true"
                    />
                  </span>
                  Back to Home
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default login;
