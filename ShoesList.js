import React from "react";
import Shoes from "./Shoes";

import Kobe1 from "/Users/kyoazumaya/Desktop/bootcamp_assignment/shoes-app/src/kobe1.jpeg";
import Kobe2 from "/Users/kyoazumaya/Desktop/bootcamp_assignment/shoes-app/src/kobe2.jpeg";
import Kobe3 from "/Users/kyoazumaya/Desktop/bootcamp_assignment/shoes-app/src/kobe3.jpeg";
import Kobe4 from "/Users/kyoazumaya/Desktop/bootcamp_assignment/shoes-app/src/kobe4.jpeg";
import Kobe5 from "/Users/kyoazumaya/Desktop/bootcamp_assignment/shoes-app/src/kobe5.jpeg";
import Kobe6 from "/Users/kyoazumaya/Desktop/bootcamp_assignment/shoes-app/src/kobe6.jpeg";
import Kobe7 from "/Users/kyoazumaya/Desktop/bootcamp_assignment/shoes-app/src/kobe7.jpeg";
import Kobe8 from "/Users/kyoazumaya/Desktop/bootcamp_assignment/shoes-app/src/kobe8.jpeg";

const listOfShoes = [
  {
    name: "Nike Zoom Kobe I",
    price: "$300.00",
    image: Kobe1,
    color1: "Black/White",
    color2: "White/Purple",
  },
  {
    name: "Nike Zoom Kobe II",
    price: "$300.00",
    image: Kobe2,
    color1: "White/Gray",
    color2: "Black/Yellow",
  },
  {
    name: "Nike Zoom Kobe III",
    price: "$300.00",
    image: Kobe3,
    color1: "White/Red",
    color2: "Black/Gray",
  },
  {
    name: "Nike Zoom Kobe IV",
    price: "$300.00",
    image: Kobe4,
    color1: "White/Purple",
    color2: "Black/White",
  },
  {
    name: "Nike Zoom Kobe V",
    price: "$300.00",
    image: Kobe5,
    color1: "White/Blue",
    color2: "Black/Purple",
  },
  {
    name: "Nike Zoom Kobe VI",
    price: "$300.00",
    image: Kobe6,
    color1: "White/Yellow",
    color2: "White/Orange",
  },
  {
    name: "Nike Zoom Kobe VII",
    price: "$300.00",
    image: Kobe7,
    color1: "Black/Blue",
    color2: "Black/Yellow",
  },
  {
    name: "Nike Zoom Kobe VIII",
    price: "$300.00",
    image: Kobe8,
    color1: "Red/Yellow",
    color2: "Black/Green",
  },
];

export default function ShoesList() {
  return (
    <div>
      {listOfShoes.map((shoes, index) => {
        const { image, name, price, color1, color2 } = shoes;
        console.log(image, name, price, color1, color2);

        return (
          <div>
            <Shoes
              key={index}
              image={shoes.image}
              name={shoes.name}
              price={shoes.price}
              color1={shoes.color1}
              color2={shoes.color2}
            />
          </div>
        );
      })}
    </div>
  );
}
