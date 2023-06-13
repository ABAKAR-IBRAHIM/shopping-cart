"use client";
import { TopNavigation } from "./TopNavigation";
import "./globals.css";
import { Providers } from "./Redux/provider";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <Providers>
          <body className="bg-white text-black  ">
            <TopNavigation />
            <ToastContainer />
            <div className=" flex-1">{children}</div>
            <Footer />
          </body>
        </Providers>
      </SessionProvider>
    </html>
  );
}
