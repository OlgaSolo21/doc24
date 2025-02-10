import './CreateCard.css'
import {useState} from "react";
export default function CreateCard ({title, imageUrl}) {
    const [isLiked, setIsLiked] = useState(false);
    const handleLikeToggle = () => {
        setIsLiked(prevState => !prevState);
    };

    const cardLikeButtonClassName = isLiked ? 'cards__like_active cards__like' : 'cards__like';

    return (
        <li className="cards__item">
            <img className="createCard__img" src={imageUrl} alt='foto'/>
            <div className="cards__content">
                <h2 className="cards__title">{title}</h2>
                <button type="button" aria-label="Check" className={cardLikeButtonClassName} onClick={handleLikeToggle}/>
            </div>
        </li>
    );
};