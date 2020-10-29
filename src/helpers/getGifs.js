


    export const getGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=15&api_key=Fg5b1R1JJXEyE95Fds2MF8AOCug520Fk`;
        const respuesta = await fetch(url);
        const { data } = await respuesta.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return gifs;
        //setImages(gifs);
    };