import { useState } from "react";

export default function ChampLore({ champInfo, selectedChamp }) {
  const [hover, setHover] = useState(false);

  const champLoreStyling = {
    width: '90%',
    padding: '5px', 
    margin: '10px',
    backgroundColor: 'tan',
    borderRadius: '7px',
  }
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={champLoreStyling}
      // style={{borderRadius: '7px', backgroundColor: 'red'}}
    >
      {hover ? champInfo[selectedChamp].lore : champInfo[selectedChamp].blurb}
    </div>
  );
}
