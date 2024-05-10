import { useRef, useState } from "react";
import StylePlayerWrapper from "./StylePlayerWrapper.jsx";

export default function Player() {
  const playerName = useRef();

  const [currentName, setCurrentName] = useState(null);

  function handleClick() {
    setCurrentName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <StylePlayerWrapper>
      <h2>Welcome {currentName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </StylePlayerWrapper>
  );
}
