
import "./App.css";
import { useState } from "react";
import Button from "./componants/Button";

function App() {

  const [color, setColor] = useState('olive')


  return (
    <div style={{backgroundColor: color}} className={`w-full min-h-[100vh] min-w-full flex flex-col items-center`}>
     <div className="flex justify-around w-[80%] bg-black rounded-lg p-2 bottom-6 absolute flex-wrap ">
     <Button bgColor={'red'} onClick={()=>setColor('red')}>Red</Button>
     <Button bgColor={'green'} onClick={()=>setColor('green')}>Green</Button>
     <Button bgColor={'blue'} onClick={()=>setColor('blue')}>Blue</Button>
     <Button bgColor={'yellow'} onClick={()=>setColor('yellow')}>Yellow</Button>
     <Button bgColor={'pink'} onClick={()=>setColor('pink')}>Pink</Button>
     <Button bgColor={'orange'} onClick={()=>setColor('orange')}>Orange</Button>
     <Button bgColor={'black'} onClick={()=>setColor('black')}>Black</Button>
     <Button bgColor={'gray'} onClick={()=>setColor('gray')}>Gray</Button>
     </div>
    </div>
  );
}

export default App;
