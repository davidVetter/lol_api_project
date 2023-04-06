export default function SelectChampion({
  setSelectedChamp,
  setChampInfo,
  champList,
}) {
  function changeChamp(e) {
    setSelectedChamp(e.target.value);
    setChampInfo({});
  }

  return (
    <select onChange={(e) => changeChamp(e)}>
      <option selected>Select one...</option>
      {Object.entries(champList).map(([key, value], index) => (
        <option key={index} value={value}>{`${value}`}</option>
      ))}
    </select>
  );
}
