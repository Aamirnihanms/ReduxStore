import React, { useEffect } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchallproducts } from '../redux/slices/productslice';
import Layout from '../components/Layout';
import loadingGif from '../img/loading.gif';
import { useState } from 'react';

function Home() {
  const dispatch = useDispatch();
  const{allproducts,loading,error}=useSelector(state=>state.productreducer)
  // console.log(allproducts)
  const[currentpage,setcurrentpage]=useState(1)
 const productperpage = 8
 const totalpage = Math.ceil(allproducts?.length/productperpage
 )
const currentpagelastproductindex =  currentpage * productperpage
const currentpagestartproductindex = currentpagelastproductindex - productperpage
const visibleproductscard = allproducts?.slice(currentpagestartproductindex,currentpagelastproductindex)


  useEffect(() => {
    dispatch(fetchallproducts());
  }, [dispatch]);


  const navigatetonextpage =()=>{
    if(currentpage!=totalpage){
      setcurrentpage(currentpage+1)
    }
  }
  const navigatetoprevpage =()=>{
    if(currentpage!=1){
      setcurrentpage(currentpage-1)
    }
  }

  return (
    <Layout>
      <div className="pt-6 container mx-auto px-4">
       {
        loading?
        <div className='flex justify-center items-center font-bold'>
         <img src={loadingGif} alt="" /> 
        </div>
        :
       <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
           {
            allproducts.length>0 ?
               visibleproductscard?.map(product=>(
                <div key={product?.id} className="p-2 border rounded shadow border-gray-400 mb-5">
              <div className='bg-lavender-light'>
                <img
                  className="w-full h-[290px] object-cover"
                  src={product?.thumbnail}
                  alt=""
                />
                 </div>
                <hr />
                <div className="text-center my-2">
             
                <h3 className="text-xl font-bold text-lavender-dark truncate p-3">{product?.title}</h3>
                <Link
                  className="bg-lavender hover:bg-lavender-light text-white hover:text-gray-800 p-1 inline-block rounded p-3"
                  to={`/${product?.id}/view`}
                >
                  view more
                </Link>
              </div>
            </div>
               ))
            :
            <div className="font-bold text-center text-lavender-dark  mt-5 mb-5">
              product not found
            </div>
           }
          </div>
          {/* pagination*/}
          <div className="flex justify-center items-center mt-5">
            <span onClick={navigatetoprevpage}><i className='fa-solid fa-backward me-5 cursor-pointer text-lavender-dark'></i></span>
            <span className='cursor-pointer text-lavender-dark'> {currentpage} of {totalpage}</span>
            <span onClick={navigatetonextpage}><i className='fa-solid fa-forward ms-5 cursor-pointer text-lavender-dark'></i></span>
          </div>
       </>
       }
      </div>
    </Layout>
  );
}

export default Home;
