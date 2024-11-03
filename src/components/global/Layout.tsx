import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import MetaTags from "./helmet";
import Header from "./header";
import Footer from "./footer";

const ContactPage = React.lazy(() => import('../contact-pages/contact-page'));
const MainPage = React.lazy(() => import('../main-page/home-page'));

const Layout: React.FC = () => {
    return (
        <PageContainer>
            <MetaTags   
                title="Добро пожаловать на главную страницу"
                description="Болото шрека, тут комфортно и тебе всегда рады"
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl6X_2bTX8k4AUdCnmz8JA4ScwoT_I6GDLLQ&s'
                url="https://yourwebsite.com"
            />
            <Header />
            <MainContent>
                <Suspense fallback={<LoadingIndicator />}>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/contact" element={<ContactPage />} /> 
                    </Routes>
                </Suspense>
            </MainContent>
            <Footer />
        </PageContainer>
    );
};

const LoadingIndicator = () => (
    <div style={{ textAlign: 'center', padding: '20px' }}>Загрузка...</div>
);

export default Layout;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const MainContent = styled.main`
    flex: 1;
`;
