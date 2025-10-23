
'use client'; // Required for client-side interactivity (DropdownMenu, Sheet).

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu as MenuIcon } from "lucide-react";
import Link from "next/link";

export function Menu() {
  return (
    <header className="bg-black sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold text-white hover:text-pink-400 transition-colors duration-300">
          JumpArena
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex items-center space-x-6">
            <NavigationMenuItem>
              <Link href="/offers" className="text-white hover:text-cyan-400 transition-colors duration-300">
                Offers
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/activities/parties" className="text-white hover:text-cyan-400 transition-colors duration-300">
                Groups & Parties
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/location" className="text-white hover:text-cyan-400 transition-colors duration-300">
                Location
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/booking-now" className="text-white">
                <Button className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-neon-blue-500 hover:to-neon-blue-500 text-white px-6 py-2 rounded-lg text-lg transition-all duration-300">
                  Book Now
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-cyan-400 transition-colors duration-300">
                  Activities
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-800/90 w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/activities/dodgeball" className="text-white hover:text-cyan-400 transition-colors duration-300">
                      Dodgeball
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/activities/foam-pit" className="text-white hover:text-cyan-400 transition-colors duration-300">
                      Foam Pit
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/activities/open-jump" className="text-white hover:text-cyan-400 transition-colors duration-300">
                      Open Jump
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/activities/freestyle" className="text-white hover:text-cyan-400 transition-colors duration-300">
                      Free Style
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/activities" className="text-white hover:text-cyan-400 transition-colors duration-300">
                      More +
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors duration-300">
                Contact Us
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-cyan-400 transition-colors duration-300">
                  More
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-800/90 w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/faqs" className="text-white hover:text-neon-blue-500 transition-colors duration-300">
                      FAQs
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/gallery" className="text-white hover:text-neon-blue-500 transition-colors duration-300">
                      Gallery
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/schools" className="text-white hover:text-neon-blue-500 transition-colors duration-300">
                      Schools
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/vip-party-package" className="text-white hover:text-neon-blue-500 transition-colors duration-300">
                      VIP-Corporate
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/franchise" className="text-white hover:text-neon-blue-500 transition-colors duration-300">
                      Franchise
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/landlords" className="text-white hover:text-neon-blue-500 transition-colors duration-300">
                      Landlords
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/blog" className="text-white hover:text-neon-blue-500 transition-colors duration-300">
                      Blog Arena
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/event" className="text-white hover:text-neon-blue-500 transition-colors duration-300">
                      What’s On
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/arena-rules" className="text-white hover:text-neon-blue-500 transition-colors duration-300">
                      Arena Rules
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black text-white w-64 overflow-y-auto max-h-screen">
            <div className="flex flex-col space-y-4 mt-6 ml-2 py-4">
              <Link href="/offers" className="hover:bg-gray-900/30 hover:text-cyan-400 transition-colors duration-300 rounded px-2 py-1">Offers</Link>
              <Link href="/activities/parties" className="hover:bg-gray-900/30 hover:text-cyan-400 transition-colors duration-300 rounded px-2 py-1">Groups & Parties</Link>
              <Link href="/location" className="hover:bg-gray-900/30 hover:text-cyan-400 transition-colors duration-300 rounded px-2 py-1">Location</Link>
              <Link href="/booking-now">
                <Button className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-neon-blue-500 hover:to-neon-blue-500 text-white w-full">Book Now</Button>
              </Link>
              <div className="font-bold">Activities</div>
              <Link href="/activities/dodgeball" className="pl-4 hover:bg-gray-900/30 hover:text-cyan-400 transition-colors duration-300 rounded px-2 py-1">Dodgeball</Link>
              <Link href="/activities/foam-pit" className="pl-4 hover:bg-gray-900/30 hover:text-cyan-400 transition-colors duration-300 rounded px-2 py-1">Foam Pit</Link>
              <Link href="/activities/open-jump" className="pl-4 hover:bg-gray-900/30 hover:text-cyan-400 transition-colors duration-300 rounded px-2 py-1">Open Jump</Link>
              <Link href="/activities/freestyle" className="pl-4 hover:bg-gray-900/30 hover:text-cyan-400 transition-colors duration-300 rounded px-2 py-1">Free Style</Link>
              <Link href="/activities" className="pl-4 hover:bg-gray-900/30 hover:text-cyan-400 transition-colors duration-300 rounded px-2 py-1">More +</Link>
              <Link href="/contact" className="hover:bg-gray-900/30 hover:text-cyan-400 transition-colors duration-300 rounded px-2 py-1">Contact Us</Link>
              <div className="font-bold">More</div>
              <Link href="/faqs" className="pl-4 hover:bg-gray-900/30 hover:text-neon-blue-500 transition-colors duration-300 rounded px-2 py-1">FAQs</Link>
              <Link href="/gallery" className="pl-4 hover:bg-gray-900/30 hover:text-neon-blue-500 transition-colors duration-300 rounded px-2 py-1">Gallery</Link>
              <Link href="/schools" className="pl-4 hover:bg-gray-900/30 hover:text-neon-blue-500 transition-colors duration-300 rounded px-2 py-1">Schools</Link>
              <Link href="/vip-party-package" className="pl-4 hover:bg-gray-900/30 hover:text-neon-blue-500 transition-colors duration-300 rounded px-2 py-1">VIP-Corporate</Link>
              <Link href="/franchise" className="pl-4 hover:bg-gray-900/30 hover:text-neon-blue-500 transition-colors duration-300 rounded px-2 py-1">Franchise</Link>
              <Link href="/landlords" className="pl-4 hover:bg-gray-900/30 hover:text-neon-blue-500 transition-colors duration-300 rounded px-2 py-1">Landlords</Link>
              <Link href="/blog" className="pl-4 hover:bg-gray-900/30 hover:text-neon-blue-500 transition-colors duration-300 rounded px-2 py-1">Blog Arena</Link>
              <Link href="/event" className="pl-4 hover:bg-gray-900/30 hover:text-neon-blue-500 transition-colors duration-300 rounded px-2 py-1">What’s On</Link>
              <Link href="/arena-rules" className="pl-4 hover:bg-gray-900/30 hover:text-neon-blue-500 transition-colors duration-300 rounded px-2 py-1">Arena Rules</Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
