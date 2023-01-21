import heroes from '../data/heroes'

export const getHeroesById = (id) => heroes.find(heroes => heroes.id === id)

// console.log(getHeroesById(1))


export const getHeroesByOwner = (owner) => heroes.filter(heroes => heroes.owner === owner)

// console.log(getHeroesByOwner('DC'))

