"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => (prev[label] ? {} : {[label]: true}));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll" , handleScroll);
    return () => window.removeEventListener("scroll" , handleScroll);
  }, []);

  return (
    <div 
      className={`w-full transition-all bg-white duration-500 fixed top-0 z-100
      ${isScrolled ? "bg-(--white) shadow-md" : "bg-transparent"}`}>
        <div className="flex items-center justify-between px-[8%] lg:px-[12%] py-5">
          <div className="flex items-center gap-5">
            {/* Logo */}
             <Link href="/" className="text-5xl font-bold Audiowide text-(--black)">
             Nat<span className="text-(--prim)">ure</span></Link>
          </div>
        </div>
    </div>
  )
}
