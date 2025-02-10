import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from "../utils/api.js";
import './ProductID.css'
import Preloader from "../preloader/Preloader.jsx";

export default function ProductID({isLoading, setIsLoading}) {
    const { id } = useParams();
    const [cardDetails, setCardDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        api.getInitialCardID(id)
            .then((details) => {
                setCardDetails(details);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <section className="productID">
            {isLoading && <Preloader/>}
            <a href="doc24/products" className="buttonBack">Назад</a>
            <div className="productID__container">
                <div className="productID__content">
                    <h2 className="productID__title">{cardDetails?.name}</h2>
                    <p className="productID__subtitle">Статус: {cardDetails?.status}</p>
                    <p className="productID__subtitle">Раса: {cardDetails?.species}</p>
                    <p className="productID__subtitle">Пол: {cardDetails?.gender}</p>
                </div>
                <img className="productID__image" src={cardDetails?.image} alt={cardDetails?.name}/>
            </div>
        </section>
    );
};