import "./App.css";
import Description from "./Description";
import Navbar from "./Navbar";
import React, {useState} from "react";

function App() {
    const [items, setItems] = useState(0);
  return (
    <div className="App">
        <Navbar items = {items}/>
        <Description setItems={setItems}/>
    </div>
  );
}

export default App;
