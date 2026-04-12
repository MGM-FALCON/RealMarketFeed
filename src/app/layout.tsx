import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RealMarketFeed — Trading RSS Feed Directory",
    template: "%s | RealMarketFeed",
  },
  description:
    "A curated directory of trading RSS feeds for crypto, forex, stocks, and macro markets. Stay updated with real-time market news.",
  keywords: [
    "RSS feeds",
    "trading",
    "crypto",
    "forex",
    "stocks",
    "macro",
    "market news",
    "finance",
  ],
  openGraph: {
    title: "RealMarketFeed — Trading RSS Feed Directory",
    description:
      "A curated directory of trading RSS feeds for crypto, forex, stocks, and macro markets.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RealMarketFeed",
    description:
      "A curated directory of trading RSS feeds for crypto, forex, stocks, and macro markets.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark')}else{d.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
