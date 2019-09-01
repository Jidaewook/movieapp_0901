import React from 'react';
import PropTypes from "prop-types";

function Potato({name, picture, rating}){
    return (
        <div>
            <h2>I love {name}</h2>
            <h4>{rating}/5.0</h4>
            <img src={picture} alt={name}/>

        </div>
    );



}

Potato.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
}



export default Potato;