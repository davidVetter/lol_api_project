import { themeColors } from "../../../Theme/ThemeColors";
import capitalizeFirstLetter from "../../../modules/capitalizeFirstLetter";
export default function ChampInfoRatings({ champInfo, selectedChamp }) {
  return (
    <div
      style={{
        fontWeight: "Bolder",
        backgroundColor: themeColors.main,
        width: "90%",
        margin: "5px",
        borderRadius: "7px",
      }}
    >
      Rating
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          fontWeight: "normal",
        }}
      >
        {Object.entries(champInfo[selectedChamp].info).map(
          ([key, value], index) => (
            <div style={{ width: "45%", margin: "5px auto" }} key={index}>
              <span style={{ fontWeight: "bolder" }}>{`${capitalizeFirstLetter(
                key
              )}:`}</span>{" "}
              {`${value}`}
            </div>
          )
        )}
      </div>
    </div>
  );
}
