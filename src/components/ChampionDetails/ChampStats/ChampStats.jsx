import { themeColors } from "../../../Theme/ThemeColors";
import capitalizeFirstLetter from "../../../modules/capitalizeFirstLetter";
import ChampTags from "../ChampTags/ChampTags";
import ChampInfoRatings from "../ChampInfoRatings/ChampInfoRatings";
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
          padding: ".5em 0",
          backgroundColor: "rgba(245, 184, 10, .9)",
          boxShadow: "0 4px 2px -2px black",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          zIndex: '9999'
        }}
      >
        <h2
          style={{
            width: "60%",
            textAlign: "left",
            paddingLeft: "10px",
            margin: 0,
          }}
        >
          Stats
        </h2>
        <ChampTags champInfo={champInfo} selectedChamp={selectedChamp} />
      </div>
      {Object.entries(champInfo[selectedChamp].stats).map(
        ([key, value], index) => (
          <div
            style={{
              width: "50%",
              margin: "0 auto",
              wordWrap: "break-word",
              wordBreak: "break-all",
            }}
            key={index}
          >
            <div
              style={{
                fontWeight: "bolder",
                textDecoration: "underline",
                width: "100%",
                margin: "0 auto",
                padding: "5px 0",
                backgroundColor: `${themeColors.mainText}`,
                borderRight: `${index % 2 === 0 ? `1px solid black`: `0`}`,
                borderLeft: `${index % 2 === 0 ? `0`: `1px solid black`}`,
                boxSizing: 'border-box'
              }}
            >{`${capitalizeFirstLetter(key)}`}</div>
            <div
              style={{
                margin: "5px auto",
              }}
            >{`${value}`}</div>
          </div>
        )
      )}
      <ChampInfoRatings champInfo={champInfo} selectedChamp={selectedChamp} />
    </div>
  );
}
