import React from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        Inventory block
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadFishes}>Load Simple Fishes</button>
      </div>
    );
  }
}
export default Inventory;
