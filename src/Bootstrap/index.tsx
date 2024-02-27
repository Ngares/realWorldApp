import React from 'react';
import './styles/index.scss';
import { Route, Routes, Link } from 'react-router-dom';
import Armadilo from '../assets/images/arm.svg';
import lucas from '../assets/images/lucas.jpg';
import Counter from '../components/Counter';
import Some from '../components/Some';

export default function App (): JSX.Element {
    return (
        <div className="app">
            <Link to="/">ARMADILO!!!</Link>
            <Link to="/some">Some</Link>
            <Link to="/counter">Counter</Link>
            КРАСНЫЙ
            <Routes>
                <Route element={ <Armadilo /> } path="/" />
                <Route element={ <Some /> } path="/some" />
                <Route element={ <Counter /> } path="/counter" />
            </Routes>
            <img alt="lucas" className="img" src={ lucas } />
        </div>
    );
}
