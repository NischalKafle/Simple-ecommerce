import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text } from '@chakra-ui/react';
import { deleteItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(deleteItem(id));
  };
  const productsCart = useSelector((state) => state.cart);

  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (event, productId) => {
    const updatedQuantities = { ...quantities, [productId]: parseInt(event.target.value, 10) };
    setQuantities(updatedQuantities);
  };

  const totalCost = productsCart.reduce((acc, product) => {
    const quantity = quantities[product.id] || 1;
    return acc + product.price * quantity;
  }, 0);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cost = searchParams.get('cost');
  return (
    
    <div>
      {productsCart.length > 0 ? (
        <h1 style={{ textAlign: 'center' }}>This is my Cart!</h1>
      ) : (
        <Link to="/">
          <button style={{ padding: '5px', margin: '5px' }} type="button" className="btn btn-primary btn-sm">
            Continue Shopping
          </button>
        </Link>
      )}

      <div className="row row-cols-1 row-cols-md-5 g-4 ">
        {productsCart.map((product) => (
          <div className="col" key={product.id} style={{ height: '400px' }}>
            <div className="card h-100">
              <img
                style={{ height: '150px', objectFit: 'cover' }}
                src={product.image}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <Text color="blue.600" fontSize="2xl">
                  <b>Price: </b>${product.price}
                </Text>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove from Cart
                </button>
                <label style={{ display: 'flex', padding: '2px' }}>
                  <b>Quantity </b>
                  <input
                    type="number"
                    defaultValue={1}
                    style={{ width: '50px', marginLeft: '2px' }}
                    onChange={(e) => handleQuantityChange(e, product.id)}
                    min={1}
                  />
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      {productsCart.length > 0 && (
        <div>
          <p style={{ padding: '5px', fontSize: '30px' }}>
            <b>Total Cost: ${totalCost}</b>
          </p>
          <Link to={`/paymentprocessing?cost=${totalCost}`}>
          <button style={{ padding: '5px', margin: '5px' }} type="button" className="btn btn-success btn-sm">
            Proceed to Payment
          </button>
          </Link>
          <Link to="/">
            <button style={{ padding: '5px', margin: '5px' }} type="button" className="btn btn-primary btn-sm">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
