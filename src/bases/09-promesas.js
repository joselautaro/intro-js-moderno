import {getHeroesById} from './bases/08-imp'

// const promesa = new Promise((resolve, reject) =>{
//     setTimeout(() =>{

//     const heroes = getHeroesById(1)

//     console.log(heroes)
//     }, 2000)
// })

const getHeroesByIdAsync = (id) =>{

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
        //  console.log("2 segundos después")
    
        const p1 = getHeroesById(id)
        // resolve(p1)
        if(p1){
            resolve(p1)
        }else{
            reject('No se puede encontrar')
        }
        }, 2000)
    })

}

getHeroesByIdAsync(2)
    .then( console.log )
    .catch( console.warn )

    