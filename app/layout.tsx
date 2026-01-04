import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { DisclaimerModal } from "@/components/legal/DisclaimerModal";
import WhatsAppFloat from "@/components/contact/WhatsAppFloat";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "KVNR Law Associates",
    description: "Global Legal Intelligence Platform",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
                <DisclaimerModal />
                <WhatsAppFloat />
                {children}
            </body>
        </html>
    );
}
