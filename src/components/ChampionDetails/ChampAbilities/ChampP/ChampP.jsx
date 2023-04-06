import parse from "html-react-parser";
import { useState, useMemo } from "react";

export default function ChampP({ champInfo, selectedChamp, champID }) {
  const [showAbilityVideo, setShowAbilityVideo] = useState(false);

  const champKey = useMemo(() => {
    return convertChampIdToFourDigits(champID);
  }, [champID]);

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
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
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
            marginTop: '5px'
          }}
        >{`${champInfo[selectedChamp].passive.name} (P)`}</div>
        <img
          alt={selectedChamp}
          src={`/passive/${champInfo[selectedChamp].passive.image.full}`}
          onClick={() => setShowAbilityVideo(!showAbilityVideo)}
        />
      </div>
      <div style={{width: '70%', backgroundColor: 'rgba(245, 184, 10, .8)', borderRadius: '3px', padding: '5px', margin: '5px auto'}}>
      {showAbilityVideo && (
            <>
              <video autoPlay controls width="100%">
                <source
                  src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champKey}/ability_${champKey}_P1.mp4`}
                  type="video/mp4"
                ></source>
              </video>
            </>
          )}
      {parse(`<div>${champInfo[selectedChamp].passive.description}</div>`)}
      </div>
    </div>
  );
}
