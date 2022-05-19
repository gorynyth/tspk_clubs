import React from 'react';
import Card from "../components/UI/Card/Card";
import cubs from "../assets/images/cubs.svg";
import calendar from "../assets/images/calendar.svg";
import romb from "../assets/images/romb.svg";
import ClubsBySpecialty from "../assets/images/ClubsBySpecialty.png";

const MainPage = () => {
    return (
        <div className="flex">
            <div className="column">
                <div style={{marginBottom: 100}}>
                    <Card
                        title={'SCREENSAVER'}
                        desc={'Основной задачи проекта является структуризация клубов и их работ, а так же для более удобного учёт для преподователей.'}
                    />
                </div>
                <div className={"fast__nav"}>
                    <h1 className={'fast__nav__title'}>Быстрая навигация</h1>
                    <div className={"images"}>
                        <div className={"images__item"}><img src={cubs} alt="cubs"/></div>
                        <div className={"images__item"}><img src={calendar} alt="calendar"/></div>
                        <div className={"images__item"}><img src={romb} alt="romb"/></div>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="flex">
                    <div className="ClubsBySpecialty">
                        <img src={ClubsBySpecialty} alt=""/>
                        <p className="ClubsBySpecialty__title">Клубы по специальностям</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
