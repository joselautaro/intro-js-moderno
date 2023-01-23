
const getImagen = async () => {

    try {
        const apiKey = 'jShAmTnYZCcyXI6enRjtx9kOAVIWPMTn'

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img')
        img.src = url;
        document.body.append(img)
    } catch (error) {
        console.error(error)
    }


}


getImagen();




// const apiKey = 'jShAmTnYZCcyXI6enRjtx9kOAVIWPMTn'

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=jShAmTnYZCcyXI6enRjtx9kOAVIWPMTn`)

// peticion
//     .then(resp => resp.json())
//     .then(({ data }) => {
//         const { url } = data.images.original;
//         console.log(url)

//         const img = document.createElement('img')
//         img.src = url;
//         document.body.append(img)

//     })
//     .catch(console.warn)



