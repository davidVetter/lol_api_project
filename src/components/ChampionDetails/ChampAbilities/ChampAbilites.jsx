import ChampP from "../ChampAbilities/ChampP/ChampP";
import SingleAbility from "./SingleAbility/SingleAbility";

export default function ChampAbilites({ champInfo, selectedChamp }) {
//   function convertChampIdToFourDigits(champId) {
//     let fourDigitID = '';
//     if (champId.length === 1){
//         fourDigitID = `000${champId}`;
//     } else if (champId.length === 2){
//         fourDigitID = `00${champId}`;
//     } else if (champId.length === 3) {
//         fourDigitID = `0${champId}`;
//     } else {
//         fourDigitID = champId;
//     }
//     return fourDigitID;
//   }
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
            champID={champInfo[selectedChamp].key}
          />
        );
      })}
    </div>
  );
}
