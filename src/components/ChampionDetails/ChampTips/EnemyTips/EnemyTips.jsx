import { themeColors } from "../../../../Theme/ThemeColors";
export default function EnemyTips({ champInfo, selectedChamp }) {
  const tipsStyling = {
    backgroundColor: `${themeColors.mainText}`,
    borderRadius: "7px",
    padding: "5px",
    margin: "10px",
    width: "90%",
    textAlign: "left",
  };

  return (
    <div style={tipsStyling}>
      <h3 style={{ width: "100%", textAlign: "left", fontWeight: "bolder", margin: 0 }}>
        Enemy Tips:
      </h3>
      <ul>
        {champInfo[selectedChamp].enemytips.map((tip, index) => (
          <li style={{margin: '5px 0', backgroundColor: `${themeColors.mainText}`, padding: '10px', borderRadius: '4px'}} key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}
