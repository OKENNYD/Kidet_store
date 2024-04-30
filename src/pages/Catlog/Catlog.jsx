import React from 'react'
import Header from '../../components/Header/Header'
import {Result} from '../../components/Hero/Hero'
import {Filter} from '../../components/Aside/Aside'
import Footer from '../../components/Footer/Footer'

const Search = () => {
  return (
    <div>
      <Header/>
      <div className='flex gap2.5 justify-between'>
      <Filter/>
      <Result/>
      </div>
      <Footer/> 
    </div>
  )
}

export default Search
