import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import {Basket} from '../../components/Hero/Hero'
import {Filter} from '../../components/Aside/Aside'

const Cart = () => {

  return (
    <div className=' w-full h-full'>
      <Header/>
      <div className='flex gap2.5 justify-between'>
      <Filter/>
      <Basket/>
      </div>
      <Footer/>
    </div>
  )
}

export default Cart
