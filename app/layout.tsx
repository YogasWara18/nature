import type { Metadata } from "next";
import { Audiowide, Cal_Sans, Golos_Text } from "next/font/google";
import "./globals.css";
import ClientLayout from "./Components/ClientLayout";

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
        <ClientLayout>
        {children}
        </ClientLayout>        
      </body>
    </html>
  );
}
