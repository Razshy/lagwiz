// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LagWiz - The Future of PC Optimization',
  description: 'Revolutionary PC optimization software designed to enhance your gaming experience.',
  icons: {
    icon: [
      { url: './favicon.ico' },
      { url: './favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: './favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: './apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: './android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: './android-chrome-512x512.png',
      },
    ],
  },
  manifest: './site.webmanifest',
};

// Google Analytics implementation
function GoogleAnalytics() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-PDM7PL48HH`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PDM7PL48HH');
          `,
        }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        {/* Add explicit favicon links */}
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
        <link rel="manifest" href="./site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-[#1D1D1D] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
