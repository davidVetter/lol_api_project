import { themeColors } from "../../../Theme/ThemeColors";
import capitalizeFirstLetter from "../../../modules/capitalizeFirstLetter";
export default function ChampStats({ champInfo, selectedChamp }) {
  const champStatsStyling = {
    backgroundColor: `${themeColors.main}`,
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    flexWrap: "wrap",
    borderRadius: "7px",
  };
  return (
    <div style={champStatsStyling}>
      <div
        style={{
          borderRadius: "7px 7px 0 0",
          paddingTop: ".5em",
          backgroundColor: "rgba(245, 184, 10, .9)",
          boxShadow: "0 4px 2px -2px black",
          width: "100%",
        }}
      >
        <h2
          style={{
            width: "100%",
            textAlign: "left",
            paddingLeft: "10px",
            margin: 0,
          }}
        >
          Stats
        </h2>
      </div>
      {Object.entries(champInfo[selectedChamp].stats).map(
        ([key, value], index) => (
          <div style={{ width: "50%", margin: "5px auto" }} key={index}>
            <span style={{ fontWeight: "bolder" }}>{`${capitalizeFirstLetter(
              key
            )}`}</span>
            : {`${value}`}
          </div>
        )
      )}
    </div>
  );
}
