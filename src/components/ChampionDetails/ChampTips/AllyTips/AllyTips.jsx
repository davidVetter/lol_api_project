import { themeColors } from "../../../App/App";
export default function AllyTips({ champInfo, selectedChamp }) {
  const tipsStyling = {
    backgroundColor: `${themeColors.main}`,
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
          <li style={{margin: '5px 0'}} key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}
