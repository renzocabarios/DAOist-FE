"use client";
import { MainLayout } from "@/layouts";
require("@solana/wallet-adapter-react-ui/styles.css");

import { DaoCard } from "@/components";
export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <p className="text-lg font-bold text-white">Featured DAOs</p>
        <div className="flex items-center gap-4">
          <DaoCard />
          <DaoCard />
          <DaoCard />
        </div>
      </div>
    </MainLayout>
  );
}
