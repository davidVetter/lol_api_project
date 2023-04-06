import { useState, useMemo } from "react";
import parse from "html-react-parser";

export default function SingleAbility({
  spell,
  index,
  selectedChamp,
  champID,
}) {
  const [showAbilityVideo, setShowAbilityVideo] = useState(false);

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
    console.log("This ran!!");
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
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          borderTop: "2px black solid",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            width: "25%",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        >
          <div
            style={{
              fontWeight: "bolder",
              width: "100%",
              marginBottom: "5px",
              padding: '5px'
            }}
          >
            {`${spell.name} (${spellKeys[index]})`}
          </div>
          <img
            alt={selectedChamp}
            src={`/spell/${spell.image.full}`}
            onClick={() => setShowAbilityVideo(!showAbilityVideo)}
          />
        </div>
        <div
          style={{
            width: "70%",
            backgroundColor: "rgba(245, 184, 10, .7)",
            borderRadius: "3px",
            padding: "5px",
            margin: "5px auto",
          }}
        >
          {showAbilityVideo && (
            <>
              <video
                autoPlay
                controls
                width="100%"
                style={{ borderRadius: "4px", marginTop: "5px" }}
              >
                <source
                  src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champKey}/ability_${champKey}_${spellKeys[index]}1.mp4`}
                  type="video/mp4"
                ></source>
              </video>
            </>
          )}
          {parse(`<div>${spell.description}</div>`)}
        </div>
      </div>
    </div>
  );
}
