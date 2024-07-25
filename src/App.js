import { useState ,useRef} from 'react';
import QRCode from "react-qr-code";
import './App.css';

function App() {
  const[qrvalue,setqrvalue]=useState("");
  const ref=useRef('');
   function handleClick(){
    if(ref.current.value.trim()===""){ 
      alert("Value can't blank") 
    return;}
    setqrvalue(ref.current.value);
    ref.current.value="";
    
   }
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div>
        <input ref={ref} type='text'/>
        <button  onClick={handleClick}>Generate</button>
      </div>
      <QRCode value={qrvalue}/>
    </div>
  );
}

export default App;
