import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import NavBar from "./components/navBar/NavBar";
import { Providers } from "@/store/provider";
import NavBarBottom from "./components/navBar/NavBarMobileBottom";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Send Order",
  description: "Send everywhere",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Providers>
          <NavBar />
          {children}
          <NavBarBottom/>
        </Providers>
      </body>
    </html>
  );
}
