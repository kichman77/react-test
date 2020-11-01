import React from 'react';
import Product from './Product';
import Section from './Section'




export default function App() {
  return (
    <>
      <h1>Wellcome</h1>
      <Section>
        <Product
          // imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          name="Tacos With Lime"
          price={10.99}
          quantity={30}
        />
        <Product
          imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          name="Tacos With Lime"
          price={10.99}
          quantity={75}
        />
      </Section>
      <Section title="Recommended">
        <Product
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          name="Fries and Burger"
          price={14.29}
          quantity={100}
        />
        <Product
          // imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          name="Fries and Burger"
          price={14.29}
          quantity={20}
        />
      </Section>
    </>
  );
}
