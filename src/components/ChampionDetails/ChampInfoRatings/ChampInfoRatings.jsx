import { themeColors } from "../../../Theme/ThemeColors";
import capitalizeFirstLetter from "../../../modules/capitalizeFirstLetter";
export default function ChampInfoRatings({ champInfo, selectedChamp }) {
  return (
    <div
      style={{
        fontWeight: "Bolder",
        backgroundColor: themeColors.mainDark,
        width: "100%",
        borderRadius: "0 0 7px 7px",
        boxShadow: "0 -4px 2px -2px black",
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
