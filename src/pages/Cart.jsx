import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import emptybox from '../img/emptybox.gif';
import { decquantity, emptycart, incquantity, removecartitem } from '../redux/slices/cartslice';

function Cart() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const mycart = useSelector(state => state.cartreducer);
  const [carttotal,setcarttotal]=useState(0)
  useEffect(()=>{
    if (mycart) {
      setcarttotal(mycart.map(item => item.totalprice).reduce((a, b) => a + b, 0));
    }
  },[mycart])

  const handledecrementproduct =(product)=>{
    if(product?.quantity>1){
      dispatch(decquantity(product.id))
    }else{
      dispatch(removecartitem(product.id))
    }
  }

  const handlecheckout = ()=>{
    dispatch(emptycart())
    alert("yeah you got scammed successfullay")
    navigate('/')
  }

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="font-bold text-3xl mb-5 text-lavender-dark">Cart Summary</h1>
        {
          mycart.length > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1 md:col-span-2 border rounded p-5 shadow">
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <td className="font-semibold">#</td>
                      <td className="font-semibold">Name</td>
                      <td className="font-semibold">Image</td>
                      <td className="font-semibold">Quantity</td>
                      <td className="font-semibold">Price</td>
                      <td className="font-semibold">..</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      mycart?.map((product, index) => (
                        <tr key={product?.id}>
                          <td>{index + 1}</td>
                          <td>{product?.title}</td>
                          <td>
                            <img
                              className="w-16 h-16 object-cover"
                              src={product?.thumbnail}
                              alt=""
                            />
                          </td>
                          <td>
                            <div className="flex items-center">
                              <button onClick={()=>handledecrementproduct(product)} className="font-bold">-</button>
                              <input
                                className="border rounded p-1 mx-2 w-12 text-center"
                                type="text"
                                readOnly
                                value={product?.quantity}
                              />
                              <button onClick={()=>dispatch(incquantity(product?.id))} className="font-bold">+</button>
                            </div>
                          </td>
                          <td>$ {product?.totalprice}</td>
                          <td>
                            <button onClick={()=>dispatch(removecartitem(product?.id))}>
                              <i className="fa-solid fa-trash text-lavender-dark hover:text-coral-dark"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
                <hr className="mt-4" />
                <div className="flex justify-end mt-4 space-x-3">
                  <button onClick={()=>dispatch(emptycart())} className="bg-lavender-dark hover:bg-coral-dark text-white rounded p-3">
                    Empty Cart
                  </button>
                  <Link to="/" className="bg-lavender-dark hover:bg-mint-light text-white hover:text-lavender-dark rounded p-3">
                    Shop More
                  </Link>
                </div>
                <div className="mt-4">
                  <div className="border rounded shadow p-5">
                    <h1 className="text-2xl font-bold text-lavender-dark">
                      Total Amount: <span className="text-mint-dark">$ {carttotal}</span>
                    </h1>
                    <button onClick={handlecheckout} className="w-full bg-lavender-dark hover:bg-mint-dark rounded p-5 text-white font-bold mt-5">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            :
            <div className='flex flex-col items-center justify-center w-full'>
              <img src={emptybox} alt="" />
              <h1 className='text-3xl font-bold text-lavender-dark'>Empty!!!</h1>
            </div>
        }
      </div>
    </Layout>
  );
}

export default Cart;
