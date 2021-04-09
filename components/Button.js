const Button = ({ selected, svg, name }) => {
    return <button className={`focus:outline-none mt-4 flex py-2 pl-3 pr-4 rounded-full hover:bg-yellow-100 hover:text-yellow-400 ${selected ? 'bg-yellow-100 text-yellow-400' : ''} font-bold space-x-4 items-center`}>
        {svg}
        <span className="text-xl"> {name} </span>
    </button>
}

export default Button