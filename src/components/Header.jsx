import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { searchproduct } from '../redux/slices/productslice';

function Header({ currentPath }) {
  const mywishlist = useSelector(state => state.wishlistreducer);
  const mycart=useSelector(state=>state.cartreducer)
  console.log('Current Path in Header:', currentPath); // Debugging log
  const dispatch = useDispatch()

  return (
    <nav className="w-full bg-lavender top-0 p-5 fixed flex flex-col items-center sm:flex-row sm:justify-between">
      <div className="w-full flex justify-center sm:justify-start mb-4 sm:mb-0">
        <Link className="font-semibold text-white hover:text-lavender-dark text-2xl" to="/">
          <i className="fa-solid fa-truck-fast me-2 text-2xl"></i>EcART
        </Link>
      </div>
      <div className="flex items-center space-x-5 w-full sm:w-auto">
        {currentPath === '/' && (
          <input onChange={e=>dispatch(searchproduct(e.target.value.toLowerCase()))}
            className="rounded p-1 placeholder-gray-500 w-full sm:w-64 md:w-80 lg:w-96"
            type="text"
            placeholder="search products here"
          />
        )}
        <Link to="/wishlist" className="font-semibold">
          <div className="relative group">
            <AiOutlineHeart className="fa-regular fa-heart text-3xl text-white hover:text-mint-dark" />
            <span className="absolute top-[-5px] right-[-10px] bg-white group-hover:bg-mint-dark text-gray-800 rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {mywishlist.length}
            </span>
          </div>
        </Link>
        <Link to="/cart" className="font-semibold">
          <div className="relative group">
            <AiOutlineShoppingCart className="fa-regular fa-shopping-cart text-3xl text-white hover:text-lavender-dark" />
            <span className="absolute top-[-5px] right-[-10px] bg-white group-hover:bg-lavender-dark text-gray-800 rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {mycart.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
