import React from "react";
import MainPage from "../main-page/home-page"; 
import Header from "./header";
import ContactPage from "../contact-pages/contact-page"; 
import { Route, Routes } from "react-router-dom"; // Импорт для маршрутизации
import Footer from "./footer";

const Layout: React.FC = () => {
    return (
        <div>
            <Header /> {/* Заголовок с навигацией */}
            <Routes>
                <Route path="/" element={<MainPage />} /> {/* Главная страница */}
                <Route path="/contact" element={<ContactPage />} /> {/* Страница контактов */}
                {/* <Route path="/notFound" element={<NotFound />} /> */}
                {/* <Route path="/basket" element={<BasketPage />} /> */}
            </Routes>
            <Footer/>
        </div>
    );
};

export default Layout;
