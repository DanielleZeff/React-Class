import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function App() {
  const [isClicked, setIsclicked] = useState(false);
  const [textInput, setTextInput] = useState("");

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: isClicked ? "blue" : "red",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "50px",
            padding: "10%",
            marginLeft: "30%",
            marginTop: "5%",
          }}
        >
          <text>
            <strong>
              <p>Você digitou: {textInput}</p>
            </strong>
          </text>

          <div style={{ position: "relative", width: "43%" }}>
            <FaSearch
              style={{
                color: "grey",
                fontSize: "16px",
                position: "absolute",
                left: "10px", // Adjust this value as needed
                top: "73%",
                transform: "translateY(-50%)", // Center vertically
              }}
            />
            <input
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              style={{
                width: "100%",
                borderRadius: "40px",
                color: "grey",
                paddingLeft: "30px", // Add padding to avoid overlap with the icon
              }}
              placeholder="Hello World"
            />
          </div>

          <div /* className={colorChange} */>
            <button
              style={{
                color: "white",
                backgroundColor: "black",
                width: "10%",
                cursor: "pointer",
                marginLeft: "15%",
              }}
              /*  className={isClicked ? "blue" : "red"} */
              onClick={() => setIsclicked(!isClicked) && setTextInput("")}
            >
              Click
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
