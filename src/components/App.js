import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import AddFishForm from "./AddFishForm";

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <Order />
          <Inventory />
          <AddFishForm />
        </div>
      </div>
    );
  }
}

export default App;
