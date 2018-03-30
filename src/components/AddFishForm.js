import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = e => {
    e.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    console.log(fish);
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" type="text" ref={this.nameRef} placeholder="Name" />
        <input
          name="price"
          type="number"
          ref={this.priceRef}
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available"> Fresh </option>
          <option value="unavailable"> Sold out! </option>
        </select>
        <textarea
          name="desc"
          type="text"
          ref={this.descRef}
          placeholder="desc"
        />
        <input
          name="image"
          type="text"
          ref={this.imageRef}
          placeholder="image"
        />
        <button type="submit"> Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
