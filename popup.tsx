import { useState } from "react";

function IndexPopup() {
  const colorsData = require("./colors.json"); 
  const allColors = colorsData.allColors;

  const [colors, setColors] = useState(getRandomColors(allColors));

  function getRandomColors(allColors) {
    const numberOfColorsToShow = 5;
    const shuffledColors = allColors.sort(() => 0.5 - Math.random());
    return shuffledColors.slice(0, numberOfColorsToShow);
  }

  const handleRefresh = () => {
    const newColors = getRandomColors(allColors);
    setColors(newColors);
  };

  const handleCopyColorCode = (color) => {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = color;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
  };

  return (
    <div>
      <h2>Color Palette</h2>
      <div style={{ paddingBottom: 4 }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              padding: 10,
              marginBottom: 10,
              color: "#000000",
              width: "180px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => handleCopyColorCode(color)}
          >
            {color}
          </div>
        ))}
      </div>
      <button
        style={{ display: "block", margin: "0 auto", marginTop: "-3px" }}
        onClick={handleRefresh}
      >
        Refresh
      </button>
    </div>
  );
}

export default IndexPopup;
