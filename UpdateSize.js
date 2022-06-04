import React, { useState } from "react";

export default function UpdateSize(props) {
  const URL =
    "https://crudcrud.com/api/30072b6c1ca14683b6d55bea6efaa9a7/orders";
  const [editSize, setEditSize] = useState("");
  const updateSize = () => {
    fetch(`${URL}/${props.orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: props.name,
        price: props.price,
        size: editSize,
        color: props.color,
      }),
    }).then(() => {
      props.fetchData();
    });
    alert("Updated Size");
    setEditSize("");
  };
  return (
    <div>
      <input
        value={editSize}
        onChange={(event) => setEditSize(event.target.value)}
        placeholder="Update Size"
      ></input>
      <button className="btn btn-success" onClick={updateSize}>
        Update Size
      </button>
      <div></div>
    </div>
  );
}
