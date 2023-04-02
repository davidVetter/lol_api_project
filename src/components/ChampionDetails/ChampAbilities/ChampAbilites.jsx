import ChampP from "../ChampAbilities/ChampP/ChampP";
import parse from "html-react-parser";

export default function ChampAbilites({ champInfo, selectedChamp, setShowAbilityVideo, showAbilityVideo }) {
  const spellKeys = {
    0: "Q",
    1: "W",
    2: "E",
    3: "R",
  };

  return (
    <div>
      <ChampP champInfo={champInfo} selectedChamp={selectedChamp} />
      {champInfo[selectedChamp].spells.map((spell, index) => {
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
                <button onClick={() => setShowAbilityVideo(!showAbilityVideo)}>Video</button>
                {console.log('this is showAbilityVideo: ', showAbilityVideo)}
                {showAbilityVideo && 
                <video controls width="250">
                <source src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_W1.mp4`} type="video/mp4"></source>
                </video>}
              </div>
              {parse(`<div>${spell.description}</div>`)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
