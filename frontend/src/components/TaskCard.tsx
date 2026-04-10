interface Props {
  title: string
  reward: number
  onComplete: () => void
}

export default function TaskCard({ title, reward, onComplete }: Props) {

  return (

    <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg w-96">

      <div>

        <p>{title}</p>

        <p className="text-yellow-400">
          Reward: {reward} Tokens
        </p>

      </div>

      <button
        onClick={onComplete}
        className="bg-purple-600 px-4 py-2 rounded"
      >
        Complete
      </button>

    </div>

  )

}