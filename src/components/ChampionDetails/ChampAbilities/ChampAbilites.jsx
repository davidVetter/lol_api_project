import React from "react";
import ChampP from "../ChampAbilities/ChampP/ChampP";

export default function ChampAbilites({ champInfo, selectedChamp }) {
  return (
    <div>
      <ChampP champInfo={champInfo} selectedChamp={selectedChamp} />
      {champInfo[selectedChamp].spells.map((spell) => {
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
                {`${spell.name} (${spell.id[spell.id.length - 1]})`}
              </span>
              <div>
                <img alt={selectedChamp} src={`/spell/${spell.id}.png`} />
              </div>
              <div>{spell.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
