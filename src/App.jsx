import {Route, Routes} from "react-router-dom";
import Products from "./products/Products.jsx";
import CreateProducts from "./createProduct/createProduct.jsx";
import Home from "./home/Home.jsx";
import {useEffect, useState} from "react";
import api from "./utils/api.js";
import ProductID from "./productID/ProductID.jsx";

function App() {
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        api.getInitialCards()
            .then((cards) => {
                setCards(cards.results)
            })
            .catch(console.error)
            .finally(() => setIsLoading(false))
    }, [])

    const handleCardDelete = (id) => {
        setCards((prevCards) => prevCards.filter(card => card.id !== id));
    };

    return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={
                <Products
                    cards={ cards }
                    setCardDel = {handleCardDelete}
                    isLoading={isLoading}
                />}/>
            <Route path="/products/:id" element={
                <ProductID
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />} />
            <Route path="/create-products" element={
                <CreateProducts
                    isLoading={isLoading}
                />}/>
        </Routes>
    </>
  )
}

export default App
