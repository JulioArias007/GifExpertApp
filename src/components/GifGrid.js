import React, { useEffect, useState } from 'react'

export const GifGrid = ({ category }) => {
    useEffect(() =>{
        getGifs();
    },[]);

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Goku&limit=5&api_key=Fg5b1R1JJXEyE95Fds2MF8AOCug520Fk';
        const respuesta = await fetch(url);
        const { data } = await respuesta.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
    };

    

    return (
        <div>
            <h3> {category} </h3>

        </div>
    )
}
