import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { GetHeroByName } from '../../selectors/GetHeroByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string';

export const SearchScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { q = "" } = queryString.parse(location.search);
    const hero = useMemo(()=>GetHeroByName(q), [q]);
    const [{ searchText }, handleInputChange] = useForm({
        searchText: q
    });
    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchText.trim()) {
            alert("ingrese un heroe porfavor");
            return;
        }
        if (hero === undefined) {
            alert("heroe no registrado");
            return;
        }
        navigate(`?q=${searchText}`);
    }
    return (
        <>
            <h1>Im the Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search form</h4>
                    <hr />
                    <form action="" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder='search Hero'
                            className="form-control"
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <button type='submit' className="btn btn-outline-primary block"
                        >
                            Buscar...
                        </button>
                    </form>
                </div>
                <div className="col">
                    <h4>Resultados</h4>
                    {q === ""
                        ? <div className="alert alert-info">Busca un heroe</div> :
                        (hero.length === 0)
                        && <div className="alert alert-danger">No hay resultados para {q}</div>
                    }
                    {hero.map(item => <HeroCard key={item.id} {...item} />)}
                </div>
            </div>
        </>
    )
}
