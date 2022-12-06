import './App.css';

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import EmailSend from "./EmailSend";
 
function App(props) {
  return (
      <div className="App">
        <EmailSend />
      </div>
  );
}
export default App;