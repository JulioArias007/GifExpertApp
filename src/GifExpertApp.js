import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch', 'Samura X', 'Dragon Ball']);
    // const handleAdd = () => {
    //     //setCategories([...categories,'NewElement']);
    //     setCategories(cats => [...cats, 'NewElement']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory/>
            <hr />            
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}
