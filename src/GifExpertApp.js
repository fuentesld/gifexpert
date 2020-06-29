import React, {useState} from 'react';
import { Addcategory } from './components/Addcategory';
import {GifGrid} from './components/GifGrid';
export const GifExpertApp = () => {
  
  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
  const [categories, setCategories] = useState(['One Punch'])
  
  // const handleAdd = (e) => {
  //   setCategories(
  //     [...categories, 'wonder woman']
  //   )
  // }
  
  return (
    <>
      <h2>GiffExpertApp</h2>
      <Addcategory setCategories = {setCategories}/>
      <hr/>
      <ol>
        {categories.map(category => 
          <GifGrid 
            key={category} 
            category = {category}
          />)
        }
      </ol>
    </>
  )
}
