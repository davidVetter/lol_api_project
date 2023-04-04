import { themeColors } from "../../../Theme/ThemeColors";

export default function ChampTags({ champInfo, selectedChamp }) {
  return champInfo[selectedChamp].tags.map((tag, index) => (
    <div
      key={index}
      style={{
        backgroundColor: `${themeColors.main}`,
        width: "90%",
        borderRadius: "7px",
      }}
    >
      {tag}
    </div>
  ));
}
