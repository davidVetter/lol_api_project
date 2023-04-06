import { themeColors } from "../../../Theme/ThemeColors";

export default function ChampTags({ champInfo, selectedChamp }) {
  return (
    <div
      style={{
        backgroundColor: `${themeColors.main}`,
        width: "90%",
        borderRadius: "7px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <strong>Tags: </strong>
        {champInfo[selectedChamp].tags.join(" | ")}
      </div>
    </div>
  );
}
