import {Kumbh_Sans} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import {CartProvider} from "@/app/contexts/CartProvider";

const ksans = Kumbh_Sans({subsets: ["latin"]});

export const metadata = {
    title: "E-commerce product page | Frontend Mentor",
    description: "Made using Next.js",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={ksans.className}>
        <div className='container mx-auto px-0 md:px-16 lg:px-32'>
            <CartProvider>
                <Navbar/>
                {children}
            </CartProvider>
        </div>
        </body>
        </html>
    );
}
