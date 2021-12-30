import { heroes } from "../data/heroes"
export const GetHeroByName = (name) => {
    if(name.length === 0){
        return [];
    }
    name = name.toLowerCase();
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));
}
