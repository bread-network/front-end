const BakingData = () => {
  return (
    <div className="flex flex-col items-center">
      <svg
        height="24"
        fill="none"
        className="animate-spin mt-3 h-5 w-5 text-yellow-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <span className="mt-3 text-yellow-500 text-lg font-bold">
        Baking the bread-sticks...
      </span>
    </div>
  )
}

export default BakingData
