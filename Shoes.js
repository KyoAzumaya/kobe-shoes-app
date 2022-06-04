import React from "react";

import AddToCart from "./AddToCart";

export default function Shoes(props) {
  return (
    <div className="container p-4" id="box">
      <section className="border border-dark">
        <div className="row">
          <div className="col">
            <img src={props.image} alt=""></img>
          </div>

          <div className="col">
            <h2 className="text-center">
              <u>
                <b>{props.name}</b>
              </u>
            </h2>
            <h5 className="text-center pb-4">Price: {props.price}</h5>
            {/* <div className="text-center container">
              <form>
                <label>Color:</label>
                <select
                  className="form-control"
                  id="size"
                  value={color}
                  onChange={(event) => setSize(event.target.value)}
                >
                  <option value="color1">{props.color[0]}</option>
                  <option value="color1">{props.color[1]}</option>
                </select>
              </form>
            </div> */}
            {/* <h5 className="text-center pb-4">Color: {props.color}</h5> */}

            <AddToCart
              name={props.name}
              price={props.price}
              color1={props.color1}
              color2={props.color2}
              // image={props.image}
              size={props.size}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
