import React, { Component } from 'react';

const CharImage = props => {
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} id={props.id} onClick={props.clickFunction}/>
        </div>
    </div>
};


export default CharImage;