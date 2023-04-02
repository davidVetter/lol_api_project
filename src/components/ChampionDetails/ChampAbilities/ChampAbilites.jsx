import React from "react";

export default function ChampAbilites({ champInfo, selectedChamp }) {
  return (
    <div>
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
                {spell.name}
              </span>
              <div>
                <img alt={selectedChamp} src={`/spell/${spell.id}.png`} />
              </div>
              <div>&nbsp;{spell.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
