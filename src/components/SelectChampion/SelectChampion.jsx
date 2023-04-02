export default function SelectChampion({setSelectedChamp, setChampInfo}) {
  function changeChamp(e) {
    setSelectedChamp(e.target.value);
    setChampInfo({});
  }
  
    return (
    <select onChange={(e) => changeChamp(e)}>
        <option>Select one...</option>
        <option value='Brand'>Brand</option>
        <option>Akali</option>
        <option>Quinn</option>
        <option value="Chogath">Cho'Gath</option>
        <option>Thresh</option>
    </select>
  )
}
