import Image from "next/image"
import Link from "next/link"
import { US, ZA } from "country-flag-icons/react/3x2"
import { MenuIcon, MountainIcon } from "lucide-react"

import { getNavbarRoutes, siteMapData } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import UserProfile from "./supaauth/user-profile"
import Typography from "./ui/typography"

export default function Navbar() {
  return (
    <nav className="flex items-center  justify-between bg-white px-4 py-4 dark:bg-gray-800 md:px-9">
      <Link
        href={siteMapData.Home.path}
        className="flex w-8 items-center gap-2"
        prefetch={false}
      >
        {/* <ZA /> */}
        <Image
          src={"/sa-guy.png"}
          alt="gogov-logo"
          width={35}
          height={35}
          // objectFit="cover "
          // objectPosition="center"
        />
      </Link>
      <div className="hidden items-center justify-center gap-4 md:flex">
        <div className="flex items-center justify-center gap-5">
          {getNavbarRoutes().map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="w-full underline-offset-4 hover:underline"
              prefetch={false}
            >
              <Typography variant="p" className="text-nowrap">
                {route.title}
              </Typography>
            </Link>
          ))}
        </div>
        <UserProfile />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex w-[200px] flex-col items-start justify-center gap-4  p-4">
            <div className="flex w-full items-center justify-center">
              <UserProfile />
            </div>
            {getNavbarRoutes().map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="text-lg font-medium underline-offset-4 hover:underline"
                prefetch={false}
              >
                {route.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
