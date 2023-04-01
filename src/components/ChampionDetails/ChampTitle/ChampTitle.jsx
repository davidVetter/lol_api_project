export default function ChampTitle({ champInfo, selectedChamp }) {
  return (
    <>
      <h2>{champInfo[selectedChamp].name}</h2>
      <h4>{champInfo[selectedChamp].title}</h4>
    </>
  );
}
