import React from "react";
import ChampP from "../ChampAbilities/ChampP/ChampP";

export default function ChampAbilites({ champInfo, selectedChamp }) {
    const spellKeys = {
        0: 'Q',
        1: 'W',
        2: 'E',
        3: 'R'
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
              </div>
              <div>{spell.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
