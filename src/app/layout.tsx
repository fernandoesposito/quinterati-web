"use client"

// import type { Metadata } from "next";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Roboto, Poppins, Lato, Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Splash } from "@/components/splash";
import { ModalProvider } from "@/context/useModal";
import WhatsAppModal from "@/components/whatsappModal";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-poppins",
});
const lato = Lato({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-lato",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// export const metadata: Metadata = {
//   title: "Quinterati",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <title>Quintera TI</title>
        <link rel="icon" href="./icon.svg" />
        <meta name="emx-lgpsite-id" content="1" />
        <script src="https://lgpdquintera.nuvemx.com.br/Cookies/emx-inject.js?website_code=1" className="emx-cookie" async></script>
      </head>
      <body
        className={`${roboto.variable} ${poppins.variable} ${lato.variable} ${inter.variable} overflow-x-hidden`}
      >
        {isHome && isLoading ? (
          <Splash isLoading={isLoading} setIsLoading={setIsLoading} />
        ) : (
          <>
            <ModalProvider>
              <WhatsAppModal
                isOpen={isWhatsAppModalOpen}
                setIsOpen={setIsWhatsAppModalOpen}
              />
              <Navbar />
              {children}
              <Footer />
            </ModalProvider>
          </>
        )}
      </body>
    </html>
  );
}
