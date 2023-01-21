import {heroes} from './data/heroes';

const getHeroesById = (id) => heroes.find(heroes => heroes.id === id)

console.log(getHeroesById(1))


const getHeroesByOwner = (owner) => heroes.filter(heroes => heroes.owner === owner)

console.log(getHeroesByOwner('DC'))

