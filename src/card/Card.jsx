import './Card.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Card({ card, onSave, onRemove, isSaved, setCardDel, onCardClick }) {
    const [liked, setLiked] = useState(false);

    const cardLikeButtonClassName = `link cards__like ${liked ? 'cards__like_active' : ''}` // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardTrasButtonhClassName = `link ${!isSaved ? 'cards__trash' : 'cards__trash_inactive'}`
    const cardSaveButtonClassName = `link cards__save ${isSaved ? 'cards__save_active' : ''}`

    const handleLikeClick = (event) => {
        event.stopPropagation();
        setLiked(prevLiked => !prevLiked);
    };
    const handleDeleteClick = (event) => {//удаление карточки
        event.stopPropagation();
        setCardDel(card.id)
        // !isSaved ? setCardDel(card.id) : onRemove(card)
    }
    const handleButtonClick = (event) => {
        event.stopPropagation();
        isSaved ? onRemove(card) : onSave(card);
    };

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/products/${card.id}`);
    };

        return(
            <li className="cards__item" onClick={handleCardClick}>
                <button onClick={handleButtonClick} className={cardSaveButtonClassName}/>
                <button className={cardTrasButtonhClassName} onClick={handleDeleteClick}/>
                <img className="cards__image cursor" src={card.image} alt='foto'/>
                <div className="cards__content">
                    <h2 className="cards__title">{card.name}</h2>
                    <button type="button" aria-label="Check" className={cardLikeButtonClassName}
                            onClick={handleLikeClick}/>
                </div>
            </li>
        )
}

export default Card