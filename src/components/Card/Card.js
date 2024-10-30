import React from 'react';
import './Card.css';
import carro from '../../images/carro.png';
import {findAllByDisplayValue} from "@testing-library/react";

const Card = ({ name, description, price, onModify, onDelete }) => {
    return (
        <>
            <div className="card">
                <div className="card-img">
                    <img src={carro} alt=""/>
                </div>
                <div className="card-description">
                    <h2 className="nombre">{name}</h2>
                    <p className="description">{description}</p>
                    <p className="price">${price}</p>
                </div>
                <div className="card-botones">
                    <button className="modificar">Modificar</button>
                    <button className="eliminar">Eliminar</button>
                </div>
            </div>
        </>

    );
};

export default Card;