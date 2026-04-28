"use client"

export default function Onboarding() {
    const steps = [
        {
            id: 1,
            title: "Connect Wallet",
            description: "Use Freighter Wallet to connect to the Stellar Testnet securely.",
            icon: "🔗"
        },
        {
            id: 2,
            title: "Complete Tasks",
            description: "Answer quizzes or perform simple tasks to help our ecosystem grow.",
            icon: "📝"
        },
        {
            id: 3,
            title: "Earn Rewards",
            description: "Receive instant token rewards directly into your wallet upon completion.",
            icon: "💰"
        }
    ]

    return (
        <section className="max-w-[1400px] mx-auto w-full mb-12">
            <div className="bg-[#111827] border border-[#1e293b] rounded-[32px] p-8 md:p-12 relative overflow-hidden">
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        How It Works
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl font-medium">
                        New here? Follow these simple steps to start earning rewards and climb the leaderboard.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step) => (
                            <div key={step.id} className="flex flex-col gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#1e293b] flex items-center justify-center text-2xl shadow-inner border border-[#334155]/50">
                                    {step.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {step.id}. {step.title}
                                    </h3>
                                    <p className="text-gray-400 font-medium leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
