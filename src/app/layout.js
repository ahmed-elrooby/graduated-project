import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

import { Montserrat_Alternates } from "next/font/google";
import Up from "@/Components/Up/Up";
const inter = Montserrat_Alternates({ subsets: ["latin"],weight:["400","700"] });

export const metadata = {
  title: "Home Page | Construction",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
      
    <html lang="en">
      <body className={`${inter.className} `}>
      <ClerkProvider>
<Header/>
<Up/>
        {children}
        <Footer />
        </ClerkProvider>

      </body>
    </html>
  );
}
