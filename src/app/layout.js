import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: "MJDGanaden",
  description: "My Portfolio Website",
  icons: {
    icon: '/icon.png', // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
