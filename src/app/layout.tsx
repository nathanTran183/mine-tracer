// import type { Metadata } from "next";
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';
import './globals.css';
import Provider from '@/contexts/minerals';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Provider>
          <Header />
          <main className="w-3/4 mx-auto flex-grow gap-[50px] items-center sm:items-start pt-36">
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
