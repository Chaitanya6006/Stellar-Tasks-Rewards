"use client"

import { useState } from "react"
import {
  requestAccess,
  getAddress,
  isConnected
} from "@stellar/freighter-api"

export default function WalletConnect() {
  const [address, setAddress] = useState("")
  const [status, setStatus] = useState("")

  async function connectWallet() {
    try {
      setStatus("⏳ Connecting...")

      // 🔥 THIS TRIGGERS POPUP
      const access = await requestAccess()

      if (access.error) {
        setStatus("❌ Permission denied")
        return
      }

      const connected = await isConnected()

      if (!connected) {
        setStatus("❌ Not connected")
        return
      }

      const { address } = await getAddress()

      setAddress(address)
      setStatus("✅ Wallet Connected")
    } catch (err) {
      console.error(err)
      setStatus("❌ Error connecting wallet")
    }
  }

  return (
    <div className="flex flex-col items-start gap-1">
      <button
        onClick={connectWallet}
        className="bg-[#2563eb] hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-xl transition shadow-lg text-sm"
      >
        Connect Wallet
      </button>

      {address && (
        <div className="flex flex-col mt-4">
          <p className="text-[#22c55e] font-bold text-xl tracking-tight mb-1">
            {address.slice(0, 8)}...{address.slice(-4)}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#22c55e]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm text-gray-400 font-medium">Wallet Connected</span>
          </div>
        </div>
      )}
      {!address && status && (
        <p className="text-xs text-gray-500 font-medium mt-2">{status}</p>
      )}
    </div>
  )
}