import React from 'react'
import AllRecipes from './AllRecipes'


function RecipesLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex'>
        <AllRecipes></AllRecipes>
        {children}
    </div>
  )
}

export default RecipesLayout