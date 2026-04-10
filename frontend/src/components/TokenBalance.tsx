"use client"

import { useEffect, useState } from "react"
import { getAddress } from "@stellar/freighter-api"
import {
  Contract,
  rpc,
  Address,
  TransactionBuilder,
  Networks,
  BASE_FEE
} from "@stellar/stellar-sdk"

import { TOKEN_CONTRACT, RPC_URL } from "../config/contracts"

export default function TokenBalance() {
  const [balance, setBalance] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    async function loadBalance() {
      try {
        setLoading(true)
        const result = await getAddress()
        
        // Handle result being an object or a string depending on API version
        const address = typeof result === "string" ? result : result?.address

        if (!address) {
          setLoading(false)
          return
        }

        const server = new rpc.Server(RPC_URL)
        const contract = new Contract(TOKEN_CONTRACT)

        let account;
        try {
          account = await server.getAccount(address)
        } catch (e) {
          setBalance("0.000000")
          setLoading(false)
          return
        }

        const tx = new TransactionBuilder(account, {
          fee: BASE_FEE,
          networkPassphrase: Networks.TESTNET
        })
          .addOperation(
            contract.call(
              "balance",
              Address.fromString(address).toScVal()
            )
          )
          .setTimeout(30)
          .build()

        const sim = await server.simulateTransaction(tx)
        let raw = "0"
        
        // @ts-ignore
        const retval = sim.result?.retval
        if (retval) {
           // @ts-ignore
           raw = retval._value?._attributes?.lo?._value || retval._value || "0"
        }

        const formatted = (Number(raw) / 10000000).toFixed(6)
        setBalance(formatted)
      } catch (err) {
        console.log("Balance error:", err)
      } finally {
        setLoading(false)
      }
    }

    loadBalance()
    const interval = setInterval(loadBalance, 15000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-[#0f172a] px-6 py-3 rounded-2xl border border-[#1e293b] flex flex-col items-end justify-center min-w-[160px] shadow-xl">
      <p className="text-[11px] uppercase tracking-[0.1em] text-gray-500 mb-0.5 font-bold">Balance</p>
      <div className="flex items-center gap-1.5">
        <span className="text-[#22c55e] text-xl font-black tracking-tight">
          {loading && !balance ? "..." : (balance || "0.000000")}
        </span>
        <span className="text-[#22c55e] text-xl font-black tracking-tight">TTK</span>
      </div>
    </div>
  )
}