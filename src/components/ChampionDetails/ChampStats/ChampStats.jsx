import { themeColors } from "../../../Theme/ThemeColors";
export default function ChampStats({ champInfo, selectedChamp }) {
  const champStatsStyling = {
    backgroundColor: `${themeColors.main}`,
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    flexWrap: "wrap",
  };
  return (
    <div style={champStatsStyling}>
      <div style={{ fontWeight: "bolder", width: "100%" }}>Stats</div>
      {Object.entries(champInfo[selectedChamp].stats).map(
        ([key, value], index) => (
          <div
            style={{ width: "50%", margin: "5px auto" }}
            key={index}
          >{`${key}: ${value}`}</div>
        )
      )}
    </div>
  );
}
