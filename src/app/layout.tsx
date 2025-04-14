import { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GorillaLoader from './components/GorillaLoader';
import './globals.css';

// Export metadata as a server component
export const metadata: Metadata = {
  title: "Riley Derby | Biological Anthropology | UT Austin",
  description: "Riley Derby is a PhD candidate in Biological Anthropology at UT Austin, studying primate behavior and social relationships in mountain gorillas and chimpanzees.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32', type: 'image/x-icon' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <GorillaLoader />
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
