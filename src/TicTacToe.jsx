import { useRef, useState } from "react";
import O_icon from "./assets/O.jpg";
import X_icon from "./assets/X.jpg";

let data = ["", "", "", "", "", "", "", "", ""];

function TicTacToe() {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  let titleref = useRef(null);

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return;
    }

    if (data[num] !== "") {
      return;
    }

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${X_icon}" alt="">`;
      data[num] = "X";
      setCount(count + 1);
    } else {
      e.target.innerHTML = `<img src="${O_icon}" alt="">`;
      data[num] = "O";
      setCount(count + 1);
    }

    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[0]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[3]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[6]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[0]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[1]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[2]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[0]);
    }
  };

  const won = (winner) => {
    setLock(true);

    if (winner === "X") {
      titleref.current.innerHTML = "X Wins";
    } else {
      titleref.current.innerHTML = "O Wins";
    }
  };

  function handlereset() {
    data = ["", "", "", "", "", "", "", "", ""];

    setCount(0);
    setLock(false);

    titleref.current.innerHTML = "Tic Tac Toe";

    box_array.forEach((box) => {
      box.current.innerHTML = "";
    });
  }

  return (
    <div className="container">
      <h1 className="title" ref={titleref}>
        Tic Tac Toe
      </h1>

      <div className="Game">
        <div className="row1">
          <div className="Boxes" ref={box1} onClick={(e) => toggle(e, 0)}></div>
          <div className="Boxes" ref={box2} onClick={(e) => toggle(e, 1)}></div>
          <div className="Boxes" ref={box3} onClick={(e) => toggle(e, 2)}></div>
        </div>

        <div className="row2">
          <div className="Boxes" ref={box4} onClick={(e) => toggle(e, 3)}></div>
          <div className="Boxes" ref={box5} onClick={(e) => toggle(e, 4)}></div>
          <div className="Boxes" ref={box6} onClick={(e) => toggle(e, 5)}></div>
        </div>

        <div className="row3">
          <div className="Boxes" ref={box7} onClick={(e) => toggle(e, 6)}></div>
          <div className="Boxes" ref={box8} onClick={(e) => toggle(e, 7)}></div>
          <div className="Boxes" ref={box9} onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>

      <button className="Reset" onClick={handlereset}>
        Reset
      </button>
    </div>
  );
}

export default TicTacToe;
