import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addtowishlist } from '../redux/slices/wishlistslice';
import Layout from '../components/Layout';
import { addtocart } from '../redux/slices/cartslice';

const View = () => {
  const mycart = useSelector((state) => state.cartreducer);
  const mywishlist = useSelector((state) => state.wishlistreducer);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (sessionStorage.getItem('allproducts')) {
      const allproducts = JSON.parse(sessionStorage.getItem('allproducts'));
      setProduct(allproducts.find((item) => item.id == id));
    }
  }, [id]);

  const handleWishlist = (product) => {
    console.log('Current Wishlist:', mywishlist);
    const existingProduct = mywishlist?.find((item) => item.id === product.id);
    console.log('Existing Product:', existingProduct);
    if (existingProduct) {
      alert('This item is already in your wishlist.');
    } else {
      dispatch(addtowishlist(product));
      alert('Item added to wishlist.');
    }
  };

  const handleAddToCart = (product) => {
    const existingProduct = mycart?.find((item) => item.id === product.id);
    if (existingProduct) {
      dispatch(addtocart(product));
      alert('Product quantity is incrementing');
    } else {
      dispatch(addtocart(product));
    }
  };

  return (
    <>
      <Layout>
        <div className="flex justify-center items-center mx-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-12 bg-lavender-light p-4 rounded-lg shadow-lg">
            <div className="bg-lavender-light flex justify-center">
              <img className="w-full max-w-md h-auto object-cover" src={product?.thumbnail} alt="" />
            </div>
            <div>
              <h3 className="text-coral-dark">{product?.id}</h3>
              <h1 className="text-3xl font-bold text-lavender-dark">{product?.title}</h1>
              <h4 className="font-bold text-mint-dark text-xl">$ 9.99</h4>
              <p>
                <span className="font-bold text-coral-dark">Description:</span>
                {product?.description}
              </p>
              <div className="flex mt-5 space-x-4">
                <button
                  onClick={() => handleWishlist(product)}
                  className="bg-lavender-dark hover:bg-mint-dark text-white p-2 rounded text-xl"
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
                <button onClick={() => handleAddToCart(product)} className="bg-lavender-dark hover:bg-coral-dark text-white p-2 rounded">
                  <i className="fa-solid fa-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default View;
