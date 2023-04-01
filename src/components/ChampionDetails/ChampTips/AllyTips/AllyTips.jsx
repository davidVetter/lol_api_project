export default function AllyTips({ champInfo, selectedChamp }) {
  return (
    <>
      <h3>Ally Tips:</h3>
      <ul>
        {champInfo[selectedChamp].allytips.map((tip, index) => <li key={index}>{tip}</li>)}
      </ul>
    </>
  )
}
