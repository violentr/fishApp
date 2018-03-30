import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    const fishes = { ...this.state.fishes };
    let number = Object.keys(fishes).length;
    fishes[`fish${number + 1}`] = fish;
    this.setState({ fishes });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <Order />
          <Inventory addFish={this.addFish} />
        </div>
      </div>
    );
  }
}

export default App;
