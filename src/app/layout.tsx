import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolScan AI",
  description:
    "Track top Solana memecoin wallets, smart money, SPL token movements, and KOL-linked wallet activity in real time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
