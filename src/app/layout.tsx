import "~/styles/globals.css";

import { ClerkProvider } from '@clerk/nextjs'

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TopNav } from "./_components/topNav";

export const metadata: Metadata = {
  title: "Itinerary Companion",
  description: "Travel Itinerary Helper",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>

  );
}
