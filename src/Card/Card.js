import React from 'react';
import './Card.css';
import carro from '../../images/carro.png';

const Card = ({ name, description, price, onModify, onDelete }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={carro} alt="carro" />
            </div>
            <div className="card-content">
                <h3 className="card-title">Nombre: {name}</h3>
                <p className="card-description">Descripcion: {description}</p>
                <p className="card-price">Precio: ${price}</p>
            </div>
            <div className="card-buttons">
                <button className="card-button modify" onClick={onModify}>
                    Modify
                </button>
                <button className="card-button delete" onClick={onDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Card;