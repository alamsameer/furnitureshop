import React, {  useContext, useEffect, useState } from 'react'
import CartContext from '../components/context/CartContext';
import CartItem from '../components/CartItem';
export default function Cart() {
  const { carts } = useContext(CartContext)
  const [shippingPrice, setShipping] = useState(40)
  const [Total, setTotal] = useState(0)
  const [subTotal, setsubTotal] = useState(0)
  useEffect(() => {
    console.log("i am 2")
    console.log(shippingPrice);
    TotalPrice(carts)
  }, [carts])
  function TotalPrice(carts) {
    let sum = 0
    if (carts.length === 0) {
      setShipping(0)
    }
    carts.forEach(element => {
      const { price } = element
      sum += Number(price)
    });
    console.log(sum);
    setsubTotal(sum)
    sum = sum + shippingPrice
    setTotal(sum)
  }
  return (
    <div className=" container mx-auto w-screen  ">
      <h2 className="text-3xl font-bold text-center p-8">Your cart</h2>
      <div className='grid  grid-cols-1 md:grid-cols-3 '>
        <ul className="grid grid-cols-1 col-span-2 justify-items-center divide-y divide-gray-700  ">
          {
            carts.length >= 1 ? carts.map((item, i) => {
              const { name, price, image } = item
              return <CartItem key={i} name={name} image={image} price={price} />
            }) : <p className='text-lg font-semibold'>your cart is empty</p>
          }
        </ul>
        <div className='p-4 grid content-start '>
          <div className='bg-gray-200 p-4 md:m-8'>
            <h1 className='text-center font-bold text-2xl'>Summary</h1>
            <ul className='flex flex-col gap-6 '>
              <li>Subtotal = <span className='font-semibold'>{subTotal}</span></li>
              <li>shipping = <span className='font-semibold'>{shippingPrice}</span></li>
              <li>Total = <span className='font-semibold'>{Total}</span></li>
            </ul>
            <button className='p-6 my-2 w-full bg-orange-500 text-white active:bg-orange-600 focus:ring-orange-300 font-medium rounded text-xl px-3 py-2 md:px-4 md:py-2.5  lg:px-3.5 text-center'>
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
