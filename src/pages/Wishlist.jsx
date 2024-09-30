import React from 'react';
import Layout from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { removewishlistitem } from '../redux/slices/wishlistslice';
import emptybox from '../img/emptybox.gif';
import { addtocart } from '../redux/slices/cartslice';

function Wishlist() {
  const mycart = useSelector((state) => state.cartreducer);
  const mywishlist = useSelector((state) => state.wishlistreducer);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const existingProduct = mycart?.find((item) => item.id === product.id);
    if (existingProduct) {
      dispatch(addtocart(product));
      dispatch(removewishlistitem(product.id));
      alert('Product quantity is incrementing');
    } else {
      dispatch(addtocart(product));
    }
  };

  return (
    <Layout>
      <div className='container mx-auto px-4'>
        <h1 className='text-lavender-dark text-3xl font-bold mb-5'>Wishlist</h1>
        {mywishlist.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {mywishlist?.map((product) => (
              <div key={product.id} className='border rounded border-green-400 p-2'>
                <div className='bg-lavender-light'>
                  <img className='w-full h-[290px]' src={product?.thumbnail} alt="" />
                </div>
                <div className='text-center'>
                  <h3 className='text-xl font-bold text-lavender-dark truncate'>{product?.title}</h3>
                  <div className="flex justify-evenly my-3">
                    <button
                      onClick={() => dispatch(removewishlistitem(product?.id))}
                      className='bg-lavender-dark hover:bg-coral-dark text-xl p-2 border rounded'
                    >
                      <i className="fa-solid fa-heart-circle-xmark text-white"></i>
                    </button>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className='bg-lavender-dark hover:bg-mint-dark text-xl p-2 border rounded'
                    >
                      <i className="fa-solid fa-cart-plus text-white"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center w-full'>
            <img src={emptybox} alt="" />
            <h1 className='text-3xl font-bold text-lavender-dark'>Empty!!!</h1>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Wishlist;
