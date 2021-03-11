const Logo = ({ height, width }) => {
  return (
    <img
      width={width ? width : 25}
      height={height ? height : 25}
      src="/logo.svg"
      alt="bRead"
    />
  )
}

export default Logo
