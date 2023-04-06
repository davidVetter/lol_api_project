import { themeColors } from "../../../Theme/ThemeColors";

export default function ChampTags({ champInfo, selectedChamp }) {
  return (
    <div
      style={{
        backgroundColor: `${themeColors.main}`,
        width: "90%",
        borderRadius: "7px",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center'

      }}
    >
      {champInfo[selectedChamp].tags.map((tag, index) => (
        <div style={{width: '100%', fontWeight: 'bolder'}} key={index}>{tag}</div>
      ))}
    </div>
  );
}
