import Link from 'next/link'

async function AllRecipes(props) {

    const {recipes} = await fetch("http://dummyjson.com/recipes").then(res=>res.json())
    
  return ( 
    <div className='w-[25%] vh-[100%]'>
        <h1 className='text-2xl'>
            Recipes
        </h1>
        <ul>
            {
                recipes.map((recipe:any)=>{
                    return <li key={recipe.id}>
                        <Link href={`/recipes/${recipe.id}`} >{recipe.name}</Link>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default AllRecipes