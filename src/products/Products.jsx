import './Products.css'
import  { useState } from 'react';
import Card from "../card/Card.jsx";
import Preloader from "../preloader/Preloader.jsx";

const Products = ({ cards, setCardDel, onCardClick, isLoading }) => {
    const [showSavedCards, setShowSavedCards] = useState(false);
    const [savedCards, setSavedCards] = useState([]);
    const [visibleCount, setVisibleCount] = useState(4); // Начальное количество видимых фото

    const saveCard = (card) => {
        setSavedCards((prevCards) => [...prevCards, card]); // Сохраняем карточку в состояние
    };

    const removeCard = (card) => {
        setSavedCards((prevCards) => prevCards.filter(savedCard => savedCard.id !== card.id)); // Удаляем карточку
    };
    const toggleView = () => {
        setShowSavedCards(!showSavedCards);
    };

    const handleShowMore = () => {
        setVisibleCount(visibleCount + 4); // Увеличиваем количество отображаемых фото на 6
    };

    return (
        <section className="products">
            {isLoading && <Preloader/>}
            <a href="/" className="buttonBack">Назад</a>
            <div className="products__head">
                <h2 className="products__title">
                    {showSavedCards ? 'Избранное' : 'Все карточки'}
                </h2>
                <button onClick={toggleView} className="products__savedButton">
                    {showSavedCards ? 'Показать все карточки' : 'Показать избранные'}
                </button>
            </div>
            <div className="products__cards">
                <ul className="products__elements">
                    {(showSavedCards ? savedCards : cards).slice(0, visibleCount).map(card => (
                        <Card
                            key={card.id}
                            card={card}
                            onSave={saveCard}
                            isSaved={savedCards.some(savedCard => savedCard.id === card.id)}
                            onRemove={removeCard}
                            setCardDel={setCardDel}
                            onCardClick={onCardClick}
                        />
                    ))}
                </ul>
                {visibleCount < (showSavedCards ? savedCards.length : cards.length) && (
                    <button onClick={handleShowMore} className="products__btnMore">
                        Показать еще
                    </button>
                )}
            </div>
        </section>
    );
};

export default Products;