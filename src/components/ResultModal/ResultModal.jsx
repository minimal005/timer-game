import { createPortal } from "react-dom";
import StyleResult from "./StyleResult";
import { forwardRef, useImperativeHandle, useRef } from "react";

// обгортаємо функцію в forwardRef, який дозволяє передавати ref з одного компонента в інший.
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, remaningTime, onReset },
  ref
) {
  const dialog = useRef();

  const score = Math.round((1 - remaningTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    // <dialog> за замовчуванням невидимий, для видимості прописуємо атрибут open
    createPortal(
      <StyleResult ref={dialog}>
        <h2>You {result}</h2>
        {remaningTime && <h2>Your score: {score}</h2>}
        <p>
          The target time was <strong>{targetTime} seconds</strong>
        </p>
        <p>
          You stopped the timer with{" "}
          <strong>{(remaningTime / 1000).toFixed(2)} seconds left</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </StyleResult>,
      document.getElementById("modal")
    )
  );
});

export default ResultModal;
