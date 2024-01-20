import type { Metadata } from "next";
import { Roboto, Poppins, Lato } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"]});
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "700"]});
const lato = Lato({ weight: ["700"], subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Quinterati",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="./icon.svg"
        />
      </head>
      <body className={`${roboto.className} ${poppins.className} ${lato.className}`}>{children}</body>
    </html>
  );
}
