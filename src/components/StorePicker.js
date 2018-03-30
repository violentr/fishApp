import React from "react";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A store</h2>
        <input
          type="text"
          required
          ref={this.myInput}
          placeholder="Store Name"
        />
        <button type="submit"> Visit Store </button>
      </form>
    );
  }
}

export default StorePicker;
