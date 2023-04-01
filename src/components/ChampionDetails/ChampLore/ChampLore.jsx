import { useState } from "react";

export default function ChampLore({ champInfo, selectedChamp }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? champInfo[selectedChamp].lore : champInfo[selectedChamp].blurb}
    </div>
  );
}
