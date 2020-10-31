import React from 'react';
import Product from './Product';

export default function App() {
  return (
    <>
      <h1>Wellcome</h1>
      <section>
        <h2>Best selling products</h2>
        <Product
          imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          name="Tacos With Lime"
          price="10.99"
        />
      </section>
      <section>
        <h2>Recommended</h2>
        <Product
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          name="Fries and Burger"
          price="14.29"
        />
      </section>
    </>
  );
}
