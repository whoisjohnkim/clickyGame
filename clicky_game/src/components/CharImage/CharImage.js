import React, { Component } from 'react';
import './CharImage.css'

const CharImage = props => (
    <div className="card">
        <div className="img-container">
            <img className="charImage" alt={props.name} src={props.image} id={props.id} onClick={() => props.clickFunction(props.id)}/>
        </div>
    </div>
);


export default CharImage;