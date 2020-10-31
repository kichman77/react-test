import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'


// const link = React.createElement(
//   'a',
//   {
//     href: 'https://reactjs.org/',
//     target: '_blank',
//     rel: 'noreferrer noopener',
//   },
//   'Ссылка на reactjs.org',
// );

// console.log(link);

// const listImJSX = (
//   <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener">
//     'Ссылка на reactjs.org'
//   </a>
// );

// const image = React.createElement('img', {
//   src:
//     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
//   alt: 'Tacos With Lime',
//   width: 640,
// });
// const name = React.createElement('h2', null, 'Tacos With Lime');
// const price = React.createElement('p', null, 'Price: 10.99$');
// const button = React.createElement('button', { type: 'button' }, 'Add to cart');

// const product = React.createElement('div', {
//   children: [image, name, price, button],
// });

// console.log(product);
// ----------------------------------------------------------------
// пример встраивания (элемента)разметки (утилита <Fragments></Fragments>)
// const post = (
//   <>
//     <h2>Post Header</h2>
//     <p>Post text</p>
//   </>
// );
// console.log(post);

// ReactDOM.render(post, document.querySelector('#root'));
// ------------------------------------------------------------------

// const imgUrl =
//   'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640';

// const price = 10.99;

// const productInJSX = (
//   <div>
//     <img src={imgUrl} alt="Tacos With Lime" width="640" />
//     <h2>Tacos With Lime</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );



ReactDOM.render(<App />, document.querySelector('#root'));
