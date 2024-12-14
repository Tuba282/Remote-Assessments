// import type { Metadata } from "next";
import "./globals.css";

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'ID Card',
  description: 'Student ID Card'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      
      
      <body>
        {children}
      </body>
    </html>
  );
}
