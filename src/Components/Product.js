import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';

// const styles = {
//   container: {
//     outline: "1px solid #212121",
// //встраивание инлайн стилей
//   },
// };

function Product({ imgUrl, name, price, quantity }) {
  return (
    <div className="Product">
      <img src={imgUrl} alt={name} width="640" />
      <h2 className='Product-name'>{name}</h2>
      <p>Price: {price}$</p>
      <p>Quantity: {quantity < 50 ? 'Few left' : 'In stock'}</p>
      <button type="button">Add to cart</button>
    </div>
  );
}

Product.defaultProps = {
  imgUrl:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
};

export default Product;
