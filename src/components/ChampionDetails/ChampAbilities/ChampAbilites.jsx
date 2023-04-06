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
      <h2 style={{ width: "100%", textAlign: "left", marginLeft: "10px" }}>
        Abilites
      </h2>
      <ChampP champInfo={champInfo} selectedChamp={selectedChamp} />
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
