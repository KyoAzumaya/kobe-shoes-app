import React from "react";

export default function DeleteOrder(props) {
  const URL =
    "https://crudcrud.com/api/30072b6c1ca14683b6d55bea6efaa9a7/orders";

  const deleteOrder = () => {
    fetch(`${URL}/${props.orderId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      props.fetchData();
    });
    alert("Deleted Order");
  };
  return (
    <div>
      <button className="btn btn-danger" id="delete" onClick={deleteOrder}>
        Delete Order
      </button>
    </div>
  );
}
