import ChampP from "../ChampAbilities/ChampP/ChampP";
import SingleAbility from "./SingleAbility/SingleAbility";
import { themeColors } from "../../../Theme/ThemeColors";

export default function ChampAbilites({ champInfo, selectedChamp }) {
  const abilitiesStyling = {
    backgroundColor: themeColors.main,
    borderRadius: "7px",
    width: "90%",
    margin: "10px",
  };

  return (
    <div style={abilitiesStyling}>
      <div
        style={{
          borderRadius: "7px 7px 0 0",
          paddingTop: ".5em",
          backgroundColor: "rgba(245, 184, 10, .9)",
          boxShadow: "0 4px 2px -2px black",
        }}
      >
        <h2
          style={{
            width: "100%",
            textAlign: "left",
            paddingLeft: "10px",
            margin: 0,
          }}
        >
          Abilites
        </h2>
      </div>
      <ChampP
        champInfo={champInfo}
        selectedChamp={selectedChamp}
        champID={champInfo[selectedChamp].key}
      />
      {champInfo[selectedChamp].spells.map((spell, index) => {
        return (
          <SingleAbility
            key={spell.id}
            spell={spell}
            index={index}
            selectedChamp={selectedChamp}
            champID={champInfo[selectedChamp].key}
          />
        );
      })}
    </div>
  );
}
