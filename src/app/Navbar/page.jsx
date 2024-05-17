'use client'
import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoMdAirplane } from "react-icons/io";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
import { LiaShipSolid } from "react-icons/lia";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <main className="">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger><IoMdAirplane className='mx-2'/> Aircraft</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]line-clamp-2 text-sm leading-snug text-muted-foreground  ">
              <Link href="/Aircraftdetails" legacyBehavior passHref>
              <li className="cursor-pointer space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                Get Aircraft details for a specific ICAO HEX Code
              </li>
              </Link>
              <Link href="/Aircraftstatus" legacyBehavior passHref>
              <li className="cursor-pointer space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                Status and position of an airborne Aircraft for a specific
                ICAO HEX Code
              </li>
              </Link>
              <Link href="/Aircraftrange" legacyBehavior passHref>
              <li className="cursor-pointer space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                Get all aircraft in a range (up to 500km) of a center point
              </li>
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/Ships" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <LiaShipSolid className='mx-2'/> Ships
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/Military" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <BsFillAirplaneEnginesFill className='mx-2' /> Military Aircrafts
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </main>
  )
}

export default Navbar