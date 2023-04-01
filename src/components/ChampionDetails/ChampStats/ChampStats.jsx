export default function ChampStats({ champInfo, selectedChamp }) {
  return (
    <>
    <span style={{width: '100%', textAlign: 'left', fontWeight: 'bolder' }}>Stats:</span>
    <ul>
      {Object.entries(champInfo[selectedChamp].stats).map(
        ([key, value], index) => (
          <li key={index}>{`${key}: ${value}`}</li>
        )
      )}
    </ul>
    </>
  );
}
