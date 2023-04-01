export default function ChampInfoRatings({ champInfo, selectedChamp }) {
  return (
    <ul>
      {Object.entries(champInfo[selectedChamp].info).map(
        ([key, value], index) => (
          <li key={index}>{`${key}: ${value}`}</li>
        )
      )}
    </ul>
  );
}
