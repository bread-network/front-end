const Button = ({ selected, svg, name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`focus:outline-none mt-4 flex py-2 pl-3 pr-4 rounded-full hover:bg-yellow-100 hover:text-yellow-400 ${selected ? 'text-yellow-400' : ''
        } font-bold space-x-4 items-center`}
    >
      {svg}
      <span className="text-xl"> {name} </span>
    </button>
  )
}

export default Button
