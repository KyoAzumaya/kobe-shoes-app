import React from "react";
import { useState } from "react";

export default function UpdateColor(props) {
  const URL =
    "https://crudcrud.com/api/30072b6c1ca14683b6d55bea6efaa9a7/orders";
  const [editColor, setEditColor] = useState("");
  const updateColor = () => {
    fetch(`${URL}/${props.orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: props.name,
        price: props.price,
        size: props.size,
        color: editColor,
      }),
    }).then(() => {
      props.fetchData();
    });
    alert("Updated Color");
    setEditColor("");
  };

  return (
    <>
      <div>
        <input
          value={editColor}
          onChange={(event) => setEditColor(event.target.value)}
          placeholder="Update Color"
        ></input>
        <button className="btn btn-success" onClick={updateColor}>
          Update Color
        </button>
      </div>
    </>
  );
}
