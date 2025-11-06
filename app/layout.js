import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Clara Santodomingo",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${ovo.className} antialiased leading-8 overflow-x-hidden`}
        style={{ "--font-outfit": outfit.style.fontFamily }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
