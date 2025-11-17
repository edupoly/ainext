import Image from 'next/image'
import React from 'react'

async function page({ params }) {
    const { id } = await params
    const recipe = await fetch(`https://dummyjson.com/recipes/${id}`).then(res => res.json())

    return (
        <div className='w-[75%]'>
            <h1 className="text-2xl">{recipe.name}</h1>
            <div className='flex'>
                <div>
                    <h3 className='text-xl font-bold'>ingredients</h3>
                    <ol className='list-decimal'>
                        {
                            recipe.ingredients.map((ind: any, i) => {
                                return <li key={i}>{ind}</li>
                            })
                        }
                    </ol>
                    <h3 className='text-xl font-bold'>Instructions</h3>
                    <ol className='list-decimal'>
                        {
                            recipe.instructions.map((ins: any, i) => {
                                return <li key={i}>{ins}</li>
                            })
                        }
                    </ol>
                </div>
                <img src={`${recipe.image}`} className='w-100' alt="" />
            </div>
        </div>
    )
}

export default page