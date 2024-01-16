import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")
  const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF"];
  return (
    <div>
      <h2>
        Color Palette
      </h2>
    <div
      style={{
        paddingBottom: 4
      }}>
      
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            padding: 10,
            marginBottom: 10,
            color: "#000000",
            width: "180px",
            textAlign: "center"
          }}
        >
          {color}
        </div>
      ))}
    </div>
    </div>
  )
}

export default IndexPopup
