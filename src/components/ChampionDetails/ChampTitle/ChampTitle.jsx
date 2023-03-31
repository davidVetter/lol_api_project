export default function ChampTitle({champInfo, selectedChamp}) {
  console.log("this is champInfo in champTitle: ", champInfo);
  return (
    <>
      <h2>{champInfo[selectedChamp].name}</h2>
      <h4>{champInfo[selectedChamp].title}</h4>
    </>
  )
}
