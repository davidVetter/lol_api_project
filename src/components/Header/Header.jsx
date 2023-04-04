import { themeColors } from "../App/App"

export default function Header() {
  const headerStyling = {
    backgroundColor: `${themeColors.main}`,
    boxShadow: '0px 5px 5px black',
    width: '100%',
    margin: '0 0 1em',
  }
  return (
    <h1 style={headerStyling}>The Summoners Tome</h1>
  )
}
