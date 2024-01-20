"use client";
import "./globals.css";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { NEXT_PUBLIC_RPC_URL } from "@/env";
import { WALLETS } from "@/config";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen">
          <ConnectionProvider endpoint={NEXT_PUBLIC_RPC_URL}>
            <WalletProvider wallets={WALLETS} autoConnect>
              <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
          </ConnectionProvider>
        </main>
      </body>
    </html>
  );
}
