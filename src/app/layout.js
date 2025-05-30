import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { Poppins } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // you can add or remove weights as needed
  variable: "--font-poppins",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Muna Oli Portfolio",
  description:
    "A personal portfolio highlighting work, research, and training.",
     icons: {
    icon: "/favicon.ico", // Or .png if you used that format
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-poppins`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
