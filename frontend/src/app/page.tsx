"use client"

import TaskList from "../components/TaskList"
import WalletConnect from "../components/WalletConnect"
import TokenBalance from "../components/TokenBalance"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-10 space-y-12">

      {/* 🔥 TOP BAR (Full Width) */}
      <div className="flex justify-between items-start max-w-[1400px] mx-auto w-full">
        {/* LEFT: Wallet */}
        <WalletConnect />

        {/* RIGHT: Balance */}
        <TokenBalance />
      </div>

      {/* 🔥 NAV BUTTONS (Grouped Right) */}
      <div className="flex justify-end gap-4 max-w-[1400px] mx-auto w-full">
        <Link href="/leaderboard">
          <button className="bg-[#3b82f6] px-8 py-3 rounded-2xl text-black font-bold hover:bg-blue-400 transition-all text-lg min-w-[140px]">
            Leaderboard
          </button>
        </Link>

        <Link href="/profile">
          <button className="bg-[#a855f7] px-8 py-3 rounded-2xl text-black font-bold hover:bg-purple-400 transition-all text-lg min-w-[110px]">
            Profile
          </button>
        </Link>
      </div>

      {/* 🔥 TASK LIST */}
      <TaskList />

    </main>
  )
}