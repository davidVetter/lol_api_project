import { useState, useMemo } from "react";
import parse from "html-react-parser";

export default function SingleAbility({
  spell,
  index,
  selectedChamp,
  champID,
}) {
  const [showAbilityVideo, setShowAbilityVideo] = useState(false);
//   const [convertedChampID, setConvertedChampID] = useState(() =>
//     convertChampIdToFourDigits(champID)
//   );
const champKey = useMemo(() => {
    return convertChampIdToFourDigits(champID);
}, [champID]);

  const spellKeys = {
    0: "Q",
    1: "W",
    2: "E",
    3: "R",
  };

  function convertChampIdToFourDigits(champId) {
    console.log('This ran!!');
    let fourDigitID = "";
    if (champId.length === 1) {
      fourDigitID = `000${champId}`;
    } else if (champId.length === 2) {
      fourDigitID = `00${champId}`;
    } else if (champId.length === 3) {
      fourDigitID = `0${champId}`;
    } else {
      fourDigitID = champId;
    }
    return fourDigitID;
  }

  return (
    <div key={spell.id}>
      <div>
        <span
          style={{
            fontWeight: "bolder",
            textDecoration: "underline",
            width: "100%",
            textAlign: "left",
          }}
        >
          {`${spell.name} (${spellKeys[index]})`}
        </span>
        <div>
          <img alt={selectedChamp} src={`/spell/${spell.image.full}`} />
          <button onClick={() => setShowAbilityVideo(!showAbilityVideo)}>
            Video
          </button>
          {showAbilityVideo && (
            <video controls width="250">
              <source
                src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champKey}/ability_${champKey}_${spellKeys[index]}1.mp4`}
                type="video/mp4"
              ></source>
            </video>
          )}
        </div>
        {parse(`<div>${spell.description}</div>`)}
      </div>
    </div>
  );
}
