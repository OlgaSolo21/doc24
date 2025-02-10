import './Home.css'
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <h1 className="home__title">Доктор24</h1>
            <nav className="home__links">
                <NavLink to="/products" className="home__link">Все карточки</NavLink>
                <NavLink to="/create-products" className="home__link">Создать карточку</NavLink>
            </nav>
        </div>
    );
}

export default Home;