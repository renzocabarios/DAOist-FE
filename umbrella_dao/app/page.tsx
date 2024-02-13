"use client";
import { MainLayout } from "@/layouts";
require("@solana/wallet-adapter-react-ui/styles.css");

export default function Home() {
  return (
    <MainLayout>
      <p>Hello World</p>
    </MainLayout>
  );
}
