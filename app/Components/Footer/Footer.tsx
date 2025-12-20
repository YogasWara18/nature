import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-[8%] lg:px-[12%] py-10 footer bg-[#241c18] text-gray-300">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <Link href="/" className="mb-3">
          <Image
            src="/navbar-logo.png"
            alt="Nature Logo"
            width={170}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Social Media */}
        <div className="flex space-x-6 text-2xl">
          <Link href="https://github.com/username" target="_blank" className="hover:text-(--prim) transition">
            <FaGithub />
          </Link>
          <Link href="https://linkedin.com/in/username" target="_blank" className="hover:text-(--prim) transition">
            <FaLinkedin />
          </Link>
          <Link href="mailto:contact@designnaturehome.com" className="hover:text-(--prim) transition">
            <FaEnvelope />
          </Link>
          <Link href="https://wa.me/628123456789" target="_blank" className="hover:text-(--prim) transition">
            <FaWhatsapp />
          </Link>
        </div>

        <div className="border-b border-gray-300 w-[350px] flex items-center transition-all duration-300 hover:border-(--prim) cursor-pointer"></div>

        {/* Copyright */}
        <p className="text-sm mt-1 text-center">
          © {new Date().getFullYear()} T.Kurnia Yogas Wara All Rights Reserved
        </p>
      </div>
    </footer>
  );
}