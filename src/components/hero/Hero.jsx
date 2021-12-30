import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroesById } from '../../selectors/getHeroById';
export const Hero = () => {
    const { heroeId } = useParams();
    const hero = useMemo(()=> getHeroesById(heroeId),[heroeId]); 
    const navigate = useNavigate();
    if (!hero) {
        //if there is no hero, this function returns to home
        return <Navigate to="/" />
    }
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        characters,
        first_appearance
    } = hero;

    const handleReturn =()=>{
        navigate(-1);
    }
    const imgPath = `./assets/${id}.jpg`;

    return (

        <div className="row mt-5 animate__animated animate__backInUp">
            <div className="col-4">
                <img src={imgPath} alt={superhero} className="img-thumbnail" />
            </div>
            <div className="col-8">
            <h3>{hero.superhero}</h3>
            <ul className="list-group list-group">
                <li className="list-group-item">
                <b>Alter Ego: {alter_ego}</b>
                </li>
                <li className="list-group-item">
                <b>Publisher: {publisher}</b>
                </li>
                <li className="list-group-item">
                <b>First appearance: {first_appearance}</b>
                </li>
            </ul>
            <h5 className="mt-3">Characters</h5>
            <p>{characters}</p>

            <div className="btn btn-outline-info" onClick={()=> handleReturn()}>Regresar</div>
            </div>
        </div>
    )
}
