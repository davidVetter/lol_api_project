import { themeColors } from "../../../../Theme/ThemeColors";
export default function AllyTips({ champInfo, selectedChamp }) {
  const tipsStyling = {
    backgroundColor: `${themeColors.mainText}`,
    borderRadius: '7px',
    padding: '5px',
    margin: '10px',
    width: '90%',
    textAlign: 'left'
  }
  
  return (
    <div style={tipsStyling}>
      <h3 style={{ width: "100%", textAlign: "left", fontWeight: "bolder", margin: 0 }}>
        Ally Tips:
      </h3>
      <ul>
        {champInfo[selectedChamp].allytips.map((tip, index) => (
          <li style={{margin: '5px 0', backgroundColor: `${themeColors.mainText}`, padding: '10px', borderRadius: '4px'}}  key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}
