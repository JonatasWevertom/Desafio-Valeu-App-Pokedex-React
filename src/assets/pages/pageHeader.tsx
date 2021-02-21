import pokeball from '../images/pokeball.png';
import search from '../images/search.png';
import logo from '../images/logo.png';

import '../styles/pageHeader.css';

function PageHeader() {

    return (

        <div>

            <div className="logo-container">

                <img src={logo} alt="Pokemon" />
                <h1 className="Titulo"> Uma Pokedex completa criada em React JS </h1>

            </div>

            <div className="input-container">

                <form>

                    <input type="text" placeholder="Search a Pokemon" />
                    <img src={search} alt="lupa" />

                </form>

            </div>

            <div className="subtitulo-container">

                <img src={pokeball} className="logo-pokeball" alt="pokeball" />
                <h2>Filter by type</h2>

            </div>

        </div>
    )

}

export default PageHeader;
