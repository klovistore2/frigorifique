import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-neon-cyan-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/offers" className="text-white hover:text-neon-purple-500">Offers</a></li>
              <li><a href="/activities/parties" className="text-white hover:text-neon-purple-500">Groups & Parties</a></li>


                  
              <li><a href="/location" className="text-white hover:text-neon-purple-500">Locations</a></li>


              <li><a href="/activities" className="text-white hover:text-neon-purple-500">Activities</a></li>
              <li><a href="/about" className="text-white hover:text-neon-purple-500">About</a></li>
              <li><a href="/blog" className="text-white hover:text-neon-purple-500">Blog</a></li>
              <li><a href="/faqs" className="text-white hover:text-neon-pink-500">FAQs</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-neon-cyan-500">Info</h3>
            <ul className="space-y-2">
              <li><a href="/schools" className="text-white hover:text-neon-pink-500">Schools</a></li>
              <li><a href="/vip-party-package" className="text-white hover:text-neon-pink-500">VIP package</a></li>
              <li><a href="/event" className="text-white hover:text-neon-pink-500">What’s On</a></li>
              <li><a href="/arena-rules" className="text-white hover:text-neon-pink-500">Arena Rules</a></li>
              <li><a href="/gallery" className="text-white hover:text-neon-pink-500">Gallery</a></li>
              <li><a href="/franchise" className="text-white hover:text-neon-pink-500">Franchise</a></li>
              <li><a href="/landlords" className="text-white hover:text-neon-pink-500">Landlords</a></li>
              
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-neon-cyan-500">Contact Us</h3>
            <p className="mb-2 text-gray-400">Email: info@jumparena.com</p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="bg-transparent border-neon-purple-500 text-neon-purple-500 hover:bg-neon-purple-500 hover:text-white">
                Facebook
              </Button>
              
              <Button variant="outline" size="sm" className="bg-transparent border-neon-purple-500 text-neon-purple-500 hover:bg-neon-purple-500 hover:text-white">
                Instagram
              </Button>
              <Link href="https://x.com/Jump_Arena" target="_blank" rel="noopener noreferre nofollow">
              <Button variant="outline" size="sm" className="bg-transparent border-neon-purple-500 text-neon-purple-500 hover:bg-neon-purple-500 hover:text-white" >
                Twitter
              </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 JumpArena. All rights reserved.</p>
          <p className="text-xs mt-1 text-gray-600">
            <Link href="/legal/privacy" className="hover:text-neon-purple-500">Privacy Policy</Link> | 
            <Link href="/legal/tc" className="hover:text-neon-purple-500">Terms and Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}