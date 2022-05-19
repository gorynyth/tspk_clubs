import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainLayout from "./layout/MainLayout/MainLayout";
import MainPage from "./Pages/MainPage";

const App = () => {
    return (
        <>
            <Header/>
            <MainLayout>
                <MainPage/>
            </MainLayout>
            <Footer/>
        </>
    );
};

export default App;
