export default function ChampMainImg({ champInfo, selectedChamp }) {
  return (
    <img
      alt={`${selectedChamp} from League of Legends`}
      style={{width: '90%'}}
      src={`/img/centered/${selectedChamp}_${champInfo[selectedChamp].skins[0].num}.jpg`}
    />
  );
}
