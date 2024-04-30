import React from 'react'
import {Aside} from '../../components/Aside/Aside'
import Header from '../../components/Header/Header'
import {Hero} from '../../components/Hero/Hero'
import Stock from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='h-full w-full overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500'>
      <Header />
      <div className='flex gap2.5 justify-between'>
      <Aside/>
      <Hero/>
      </div>
      <Stock/>
      <Footer/>
    </div>
  )
}
export default Home
