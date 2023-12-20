import { useState } from "react";
import { Howl } from "howler";

function App() {
  const [text, setText] = useState("");
  const sound = new Howl({
    src: ["/bolejo.mp3"],
    volume: 3.0,
  });

  const evalinput = (input) => {
    setText("");
    let hasNoNumbers = true;
    let sum = 0;
    let surprisebox = document.querySelector("#surprise");
    let inputbox = document.querySelector("#input");
    for (let i = 0; i < input.length; i++) {
      if (input[i] >= "0" && input[i] <= "9") {
        hasNoNumbers = false;
        sum += eval(input[i]);
      }
    }
    if ((input.length === 7 && hasNoNumbers) || sum === 7) {
      console.log("thala");
      sound.play();
      surprisebox.textContent = "THALA FOR A REASON!!>>>>>> whistlleepodduuu";
      inputbox.disabled=true;
    }


    const time = setTimeout(() => {
      surprisebox.textContent = "You probably know what to do :&#41;";
      sound.pause();
      input.disabled=false
      clearTimeout(time);
    }, 29000);

    // clearTimeout(time);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 bg-black h-[100vh] w-[100%] text-white">
        <div className="w-[90%] flex justify-center items-center">
          <input
            className="w-[45%]  border-black p-1  md:p-4 text-black text-lg"
            value={text}
            id="input"
            onChange={(e) => setText(e.target.value)}
          ></input>
          <button onClick={() => evalinput(text)} className="border-white border-4 p-1 md:p-3" id="btn">
            Submit 
          </button>
        </div>
        <p id="surprise" className="text-sm">You probably know what to do :&#41;</p>
      </div>
    </>
  );
}

export default App;
