// import { useEffect, useCallback, useState } from "react";
// import axios from "axios";

export default function SelectChampion({
  setSelectedChamp,
  setChampInfo,
  champList,
  champInfo,
  selectedChamp
}) {
  // const [iconList, setIconList] = useState([]);

  // const getChampIconsList = useCallback(() => {
  //   axios.get(`/champ/icons`).then((response) => {
  //     setIconList(response.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   getChampIconsList();
  // }, [getChampIconsList]);

  function changeChamp(e) {
    setSelectedChamp(e.target.value);
    setChampInfo({});
  }

  return (
    <select onChange={(e) => changeChamp(e)}>
      <option value={"Select one..."}>Select one...</option>
      {Object.entries(champList).map(([key, value], index) => (
        <option key={index} value={value}>
          {/* <img
            alt={`${selectedChamp} from League of Legends`}
            style={{ width: "90%" }}
            src={`/icon/${champInfo[selectedChamp].image.full}`}
          /> */}
          {`${value}`}
        </option>
      ))}
    </select>
  );
}
