"use client"

import { useEffect, useState } from "react"
import { TASKS } from "../config/tasks"
import QuizTask from "./QuizTask"

import { getAddress, signTransaction } from "@stellar/freighter-api"
import {
  TransactionBuilder,
  Networks,
  BASE_FEE,
  Contract,
  Address,
  rpc,
  nativeToScVal
} from "@stellar/stellar-sdk"

import { TASK_CONTRACT, RPC_URL } from "../config/contracts"

export default function TaskList() {
  const [selectedTask, setSelectedTask] = useState<any>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  async function completeSimpleTask(task: any) {
    try {
      const result = await getAddress()
      const address = typeof result === "string" ? result : result?.address

      if (!address) {
        alert("Please connect wallet first")
        return
      }

      const server = new rpc.Server(RPC_URL)
      const account = await server.getAccount(address)
      const contract = new Contract(TASK_CONTRACT)

      const tx = new TransactionBuilder(account, {
        fee: BASE_FEE,
        networkPassphrase: Networks.TESTNET
      })
        .addOperation(
          contract.call(
            "complete_task",
            Address.fromString(address).toScVal(),
            nativeToScVal(task.reward, { type: "i128" })
          )
        )
        .setTimeout(30)
        .build()

      const sim = await server.simulateTransaction(tx)
      const prepared = rpc.assembleTransaction(tx, sim).build()

      const signed = await signTransaction(prepared.toXDR(), {
        networkPassphrase: Networks.TESTNET
      })

      await server.sendTransaction(
        TransactionBuilder.fromXDR(signed.signedTxXdr, Networks.TESTNET)
      )

      alert(`✅ Earned ${task.reward} TOKENS`)
    } catch (err) {
      console.error(err)
      alert("❌ Failed")
    }
  }

  if (!mounted) return <div className="mt-8 text-gray-500">Loading rewards...</div>

  if (selectedTask) {
    return (
      <div className="animate-in fade-in duration-500">
        <button
          onClick={() => setSelectedTask(null)}
          className="mb-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          ⬅ Back
        </button>

        {selectedTask.questions ? (
          <QuizTask task={selectedTask} />
        ) : (
          <div className="glass-card p-8 text-center max-w-xl mx-auto mt-10">
            <h2 className="text-3xl font-bold mb-4">{selectedTask.title}</h2>
            <p className="text-gray-400 mb-8 text-lg">{selectedTask.description}</p>
            <button
              onClick={() => completeSimpleTask(selectedTask)}
              className="bg-green-500 px-8 py-3 rounded-xl text-black font-black text-xl hover:bg-green-400 transition transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              COMPLETE & CLAIM REWARD
            </button>
          </div>
        )}
      </div>
    )
  }

  const renderLevel = (level: any, title: string, dotClass: string) => (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${dotClass} shadow-[0_0_15px_rgba(0,0,0,0.3)]`}></div>
        <h2 className="text-4xl font-extrabold tracking-tight text-white">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {level.map((task: any) => (
          <div
            key={task.id}
            onClick={() => setSelectedTask(task)}
            className="bg-[#0f172a] rounded-[32px] p-8 cursor-pointer group hover:bg-[#1e293b] transition-all border border-blue-500/20 hover:border-blue-500/50 flex flex-col justify-between min-h-[220px] shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-2"
          >
            <div>
              <h3 className="text-2xl font-black text-white mb-3 leading-tight tracking-tight">
                {task.title}
              </h3>
              <p className="text-gray-400 text-base font-semibold opacity-90">
                {task.description || "Answer quiz & earn rewards"}
              </p>
            </div>

            <div className="flex justify-between items-end mt-6">
              <span className="text-[#22c55e] font-black text-xl uppercase tracking-tighter">
                +{task.reward} TOKENS
              </span>

              <div className="flex items-center gap-1.5 text-sm font-bold text-gray-500 group-hover:text-white transition-colors">
                Click <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="mt-12 pb-24 max-w-[1400px] mx-auto">
      {renderLevel(TASKS.level1, "Level 1", "from-emerald-400 to-emerald-600")}
      {renderLevel(TASKS.level2, "Level 2", "from-amber-400 to-amber-600")}
      {renderLevel(TASKS.level3, "Level 3", "from-rose-400 to-rose-600")}
    </div>
  )
}