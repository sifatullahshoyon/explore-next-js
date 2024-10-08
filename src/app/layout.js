import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import AuthProvider from "./services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Exporting Next JS",
    template: "%s | Exporting Next JS",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <header>
            <Navbar />
          </header>
          <div className="min-h-screen p-10">{children}</div>
          <footer className="px-5 py-4 bg-amber-500">
            <p className="text-center">This is a footer</p>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
