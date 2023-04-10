import Select from "react-select";

export default function SelectChampion({
  setSelectedChamp,
  setChampInfo,
  champList,
}) {
  const options = Object.entries(champList).map(([key, value], index) => ({
    value: value,
    label: (
      <div>
        <img
          alt={`${value} from League of Legends`}
          style={{ width: "90%" }}
          src={`/icon/${value[1]}.png`}
        />
        {value[1]}
      </div>
    ),
  }));

  function changeChamp(e) {
    setSelectedChamp(e.value[1]);
    setChampInfo({});
  }

  return <Select options={options} onChange={(e) => changeChamp(e)} />;
}
