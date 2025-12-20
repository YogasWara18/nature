import type { Metadata } from "next";
import { Audiowide, Cal_Sans, Golos_Text } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const audiowide = Audiowide ({
  weight: "400",
  variable: "--font-audiowide",
  subsets: ["latin"],
});

const golostext = Golos_Text ({
  weight: "400",
  variable: "--font-golostext",
  subsets: ["latin"],
});

const calsans = Cal_Sans ({
  weight: "400",
  variable: "--font-calsans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NATURE",
  description: "Designing Harmony with Nature",
   icons: {
    icon: "/navbar-logo.png", // atau "/favicon.ico"
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${audiowide.variable} ${golostext.variable} ${calsans.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
