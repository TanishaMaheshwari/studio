import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { getBooks } from '@/lib/data';
import { BookProvider } from '@/context/BookContext';

// Define the PWA Metadata
export const metadata: Metadata = {
  title: 'LedgerBalance',
  description: 'A modern double-entry accounting app.',
  
  // 🔑 CRITICAL: Link the manifest file for PWA installation
  manifest: '/manifest.json', 
  
  // 🔑 Recommended: Sets the color of the browser's address bar/app header
  themeColor: '#000000', // Use your app's main color (e.g., the dark blue header color)
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialBooks = await getBooks();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* NOTE: Next.js automatically injects the <link rel="manifest" href="/manifest.json" /> 
          into the head when the 'manifest' property is set in the metadata export above.
          The code you manually wrote for fonts is fine here:
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        
        {/* You can optionally add the Apple touch icon link here for iOS:
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" /> 
        */}
      </head>
      <body className="font-body antialiased">
        <BookProvider initialBooks={initialBooks}>
          {children}
        </BookProvider>
        <Toaster />
      </body>
    </html>
  );
}