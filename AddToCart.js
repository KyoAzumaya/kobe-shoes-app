import React from "react";
import { useState } from "react";

export default function AddToCart(props) {
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const addOrder = (event) => {
    event.preventDefault();
    const URL =
      "https://crudcrud.com/api/30072b6c1ca14683b6d55bea6efaa9a7/orders";
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: props.name,
        price: props.price,
        size: size,
        color: color,
      }),
    }).then(() => {
      props.fetchData();
    });
    alert("Shoes Added to Cart");
  };

  return (
    <div>
      <div className="text-center container">
        <form>
          <label>Shoes Size:</label>
          <select
            className="form-control"
            id="size"
            value={size}
            onChange={(event) => setSize(event.target.value)}
          >
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
          </select>
        </form>
      </div>
      <div className="text-center container">
        <form>
          <label>Color:</label>
          <select
            className="form-control text-center"
            id="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          >
            <option value={props.color1}>{props.color1}</option>
            <option value={props.color2}>{props.color2}</option>
          </select>
        </form>
      </div>
      <button id="addButton" onClick={addOrder}>
        Add To Cart
      </button>
    </div>
  );
}
