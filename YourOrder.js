import React, { useEffect } from "react";
import { useState } from "react";
import DeleteOrder from "./DeleteOrder";
import UpdateColor from "./UpdateColor";
import UpdateSize from "./UpdateSize";

export default function YourOrder() {
  const [orders, setOrders] = useState([]);

  const fetchData = () => {
    fetch("https://crudcrud.com/api/30072b6c1ca14683b6d55bea6efaa9a7/orders")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setOrders(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="row">
        <h2 className="text-center">
          <u>Your Order</u>
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            {orders.length === 0 && <h4>Cart is Empty</h4>}
          </div>

          <span className="block-example border border-dark rounded mb-0 ">
            <div className="container">
              {orders.map((order, index) => (
                <div className="row">
                  <div className="col text-center">
                    <ul>
                      <li key={index}>
                        <b>Name:</b> {order.name} <br></br>
                        <b>Price:</b> {order.price}
                        <br></br>
                        <b>Size:</b> {order.size}
                        <br></br>
                        <b>Color:</b> {order.color}
                        <UpdateSize
                          key={order.index}
                          orderId={order._id}
                          name={order.name}
                          price={order.price}
                          color={order.color}
                          fetchData={fetchData}
                        />
                        <UpdateColor
                          key={order.index}
                          orderId={order._id}
                          name={order.name}
                          price={order.price}
                          color={order.color}
                          size={order.size}
                          fetchData={fetchData}
                        />
                        <DeleteOrder
                          orderId={order._id}
                          fetchData={fetchData}
                        />
                        <hr></hr>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
