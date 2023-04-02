import ChampP from "../ChampAbilities/ChampP/ChampP";
import SingleAbility from "./SingleAbility/SingleAbility";

export default function ChampAbilites({ champInfo, selectedChamp }) {
  return (
    <div>
      <ChampP champInfo={champInfo} selectedChamp={selectedChamp} />
      {champInfo[selectedChamp].spells.map((spell, index) => {
        return (
          <SingleAbility
            key={spell.id}
            spell={spell}
            index={index}
            selectedChamp={selectedChamp}
          />
        );
      })}
    </div>
  );
}
