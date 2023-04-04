import { themeColors } from "../../../Theme/ThemeColors";
export default function ChampInfoRatings({ champInfo, selectedChamp }) {
  return (
    <div
      style={{
        backgroundColor: themeColors.main,
        width: "90%",
        margin: "5px",
        borderRadius: "7px",
      }}
    >
      {Object.entries(champInfo[selectedChamp].info).map(
        ([key, value], index) => (
          <div key={index}>{`${key}: ${value}`}</div>
        )
      )}
    </div>
  );
}
