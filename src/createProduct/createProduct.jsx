import CreateCard from "../createCard/CreateCard.jsx";
import {useState} from "react";
import Preloader from "../preloader/Preloader.jsx";
import './createProduct.css'
import {httpRegex, textRegex} from "../utils/regex.js";
import exampleFoto from '../assets/example.jpg'

export default function CreateProducts({isLoading}) {
    const [cards, setCards] = useState([]);
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [errors, setErrors] = useState({ title: '', imageUrl: '' });

    const handleTitleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
        if (!textRegex.test(value)) {
            setErrors(prev => ({ ...prev, title: 'Только буквы' }));
        } else {
            setErrors(prev => ({ ...prev, title: '' }));
        }
    };

    const handleImageUrlChange = (e) => {
        const value = e.target.value;
        setImageUrl(value);
        if (!httpRegex.test(value)) {
            setErrors(prev => ({ ...prev, imageUrl: 'Некорректный URL' }));
        } else {
            setErrors(prev => ({ ...prev, imageUrl: '' }));
        }
    };

    const handleAddCard = (e) => {
        e.preventDefault();
        if (title && imageUrl && !errors.title && !errors.imageUrl) {
            setCards([...cards, { title, imageUrl }]);
            setTitle('');
            setImageUrl('');
            setErrors({ title: '', imageUrl: '' });
        }
    };

    return (
        <section className="createdCard">
            {isLoading && <Preloader/>}
            <a href="/" className="buttonBack">Назад</a>
            <div className="createdCard__container">
                <h2 className="products__title">Создайте свою уникальную карточку</h2>
                <div className="createdCard__addCard">
                    <form onSubmit={handleAddCard} className="createdCard__form">
                        <input
                            required
                            type="text"
                            placeholder="Название карточки"
                            value={title}
                            onChange={handleTitleChange}
                            className="createdCard__input"
                        />
                        <span className="popup__span-error">{errors.title}</span>
                        <input
                            required
                            type="text"
                            placeholder="URL изображения"
                            value={imageUrl}
                            onChange={handleImageUrlChange}
                            className="createdCard__input"
                        />
                        <span className="popup__span-error">{errors.imageUrl}</span>
                        <button type="submit" className="createdCard__button">Добавить карточку</button>
                    </form>
                    <div className="createdCard__example">
                        <img src={exampleFoto} alt="пример карточки" className="cards__image"/>
                        <h3 className="createdCard__title">Пример карточки</h3>
                    </div>
                </div>
                <ul className="products__elements">
                    {cards.map((card, index) => (
                        <CreateCard key={index} title={card.title} imageUrl={card.imageUrl}/>
                    ))}
                </ul>
            </div>
        </section>
    )
}