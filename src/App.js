import React from "react";
import Header from "./components/Header";
import MarketControl from "./components/MarketControl";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <MarketControl />
      </div>
    </React.Fragment>
  );
}

export default App;
