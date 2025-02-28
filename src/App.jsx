import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState("8");
  const [allowedNumber, setAllowedNumber] = useState(false);
  const [allowedChar, setAllowedChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowedNumber) str += "1234567890";
    if (allowedChar) str += "`!@#$%^&[]=+-_|";

    for (let i = 1; i <=length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, allowedChar, allowedNumber, setPassword]);
  const passwordRef = useRef(null)

  const copyToClipboard = useCallback(()=>{
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator();
    },[length, allowedChar, allowedNumber, passwordGenerator])


  return (
    <div className="h-screen py-10" style={{ backgroundColor: "gray" }}>
      <div className="items-center flex flex-col w-4xl bg-gray-600 border-2 mx-56 h-1/4">
        <h1 className="text-2xl m-2 text-white">Password Generator</h1>
        <div className="w-full py-3 px-4 flex gap-2">
          <input
            type="text"
            value={password}
            placeholder="password"
            className="w-full py-3 px-4 rounded-lg outline-none bg-white"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick= {copyToClipboard}
          className="bg-blue-600 rounded-lg py-2 px-4"
          >copy</button>
        </div>

        <div className="w-full py-3 px-4 flex gap-3 justify-evenly ">
          <div>
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label> Length: {length}</label>
          </div>
          <div className=" flex gap-3">
            <input
              type="checkbox"
              defaultChecked={allowedNumber}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => {
                setAllowedNumber(!allowedNumber);
              }}
            />

            <label>Number</label>
          </div>
          <div className=" flex gap-3">
            <input
              type="checkbox"
              checked={allowedChar}
              id="charInput"
              className="cursor-pointer"
              onChange={() => {
                setAllowedChar(!allowedChar);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
