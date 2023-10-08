"use client"

import Link from "next/link"
import Image from "next/image"
import { categories } from "@/constants"
import { useState } from "react"
import { useSession } from "next-auth/react"
import { signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const [openedSearch, setOpenedSearch] = useState(false);
  const [openedMenu, setOpenedMenu] = useState(false);

  const session = useSession();

  return (
    <nav className="py-6 sm:py-5 bg-white">
      <div className="container flex items-center gap-10 lg:justify-between">
        <div className="flex items-center lg:gap-4">
          <button onClick={() => setOpenedMenu(prev => !prev)} className="hidden lg:block lg:z-50">
            <Image
              src={openedMenu ? "/x.svg" : "/burger.svg"}
              width={24}
              height={24}
              alt="Menu"
            />
          </button>
          <Link href="/">
            <Image
              src="/SHOP.CO.svg"
              width={160}
              height={22}
              alt="SHOP.CO"
              className="sm:w-[126px] sm:h-[18px]"
            />
          </Link>
        </div>
        <ul className={"flex items-center gap-6 lg:fixed lg:bg-white sm:w-[75%] lg:h-[200vh] lg:shadow-2xl lg:flex-col lg:items-start lg:px-20 sm:px-10 lg:pt-[800px] lg:duration-700 " + (openedMenu ? "left-0" : "-left-[100%]")}>
          {categories.map(category => (
            <li className="text-base flex items-center gap-1" key={category}>
              {category}
              {
                category === "Shop" &&
                <Image
                  src="/more.svg"
                  width={16}
                  height={16}
                  alt="more"
                />
              }
            </li>
          ))}
        </ul>
        <form className={"flex items-center gap-3 bg-zinc-100 py-3 px-4 rounded-3xl flex-auto " + (openedSearch || " lg:hidden")}>
            <Image
              src="/search-gray.svg"
              width={24}
              height={24}
              alt="Search"
              onClick={() => setOpenedSearch(prev => !prev)}
            />
            <input className="text-base placeholder:text-base placeholder:opacity-40 focus:outline-0 bg-transparent flex-auto" type="text" placeholder="Search for products..." />
        </form>
        <div className="flex items-center gap-[14px] sm:">
          {
            openedSearch ||
            <button onClick={() => setOpenedSearch(prev => !prev)} className="hidden lg:block">
                <Image
                  src="/search.svg"
                  width={24}
                  height={24}
                  alt="Search"
                  className="fill-black"
                />
            </button>
          }
          <Link href="/">
              <Image
                src="/cart.svg"
                width={24}
                height={24}
                alt="Cart"
              />
          </Link>
          {
            session?.data ?
            <button onClick={() => signOut()}>
                <Image
                  src="/exit.svg"
                  width={24}
                  height={24}
                  alt="Sign Out"
                />
            </button> :
            <button onClick={() => signIn()}>
                <Image
                  src="/profile.svg"
                  width={24}
                  height={24}
                  alt="Sign In"
                />
            </button>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar