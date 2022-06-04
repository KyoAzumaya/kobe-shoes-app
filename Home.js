import React from "react";
import { Carousel } from "react-bootstrap";

export default function Home() {
  return (
    <div className="container border d-flex align-items-center justify-content-center">
      <h1 className="text-center">
        Kobe Bryant Classic Basketball Shoes <br></br>I-VIII
      </h1>

      <div
        className="carousel justify-content-center "
        style={{ display: "block", height: 500, width: 700, padding: 30 }}
      >
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://cconnect.s3.amazonaws.com/wp-content/uploads/2016/01/Nike-Zoom-Kobe-I-Kobe-Bryant-Shoes.jpg"
              alt="Image One"
            />
            <Carousel.Caption>
              <div className="slideshow">
                <h3>Kobe I</h3>
                <p>Price: $300.00</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://cconnect.s3.amazonaws.com/wp-content/uploads/2016/01/Nike-Zoom-Kobe-II-Kobe-Bryant-Shoes.jpg"
              alt="Image One"
            />
            <Carousel.Caption>
              <div className="slideshow">
                <h3>Kobe II</h3>
                <p>Price: $300.00</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://cconnect.s3.amazonaws.com/wp-content/uploads/2016/01/Nike-Zoom-Kobe-III-Kobe-Bryant-Shoes.jpg"
              alt="Image One"
            />
            <Carousel.Caption>
              <div className="slideshow">
                <h3>Kobe III</h3>
                <p>Price: $300.00</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://cconnect.s3.amazonaws.com/wp-content/uploads/2016/01/Nike-Zoom-Kobe-IV-Kobe-Bryant-Shoes.jpg"
              alt="Image One"
            />
            <Carousel.Caption>
              <div className="slideshow">
                <h3>Kobe IV</h3>
                <p>Price: $300.00</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://cconnect.s3.amazonaws.com/wp-content/uploads/2016/01/Nike-Zoom-Kobe-V-Kobe-Bryant-Shoes.jpg"
              alt="Image One"
            />
            <Carousel.Caption>
              <div className="slideshow">
                <h3>Kobe V</h3>
                <p>Price: $300.00</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://cconnect.s3.amazonaws.com/wp-content/uploads/2016/01/Nike-Zoom-Kobe-VI-Kobe-Bryant-Shoes.jpg"
              alt="Image One"
            />
            <Carousel.Caption>
              <div className="slideshow">
                <h3>Kobe VI</h3>
                <p>Price: $300.00</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://cconnect.s3.amazonaws.com/wp-content/uploads/2016/01/Nike-Zoom-Kobe-VII-Kobe-Bryant-Shoes1.jpg"
              alt="Image Two"
            />
            <Carousel.Caption>
              <div className="slideshow">
                <h3>Kobe VII</h3>
                <p>Price: $300.00</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://cconnect.s3.amazonaws.com/wp-content/uploads/2016/01/Nike-Zoom-Kobe-VIII-Kobe-Bryant-Shoes.jpg"
              alt="Image Two"
            />
            <Carousel.Caption>
              <div className="slideshow">
                <h3>Kobe VIII</h3>
                <p>Price: $300.00</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
