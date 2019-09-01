import React from 'react';


function Potato({name, picture}){
    return (
        <div>
            <h2>I love {name}</h2>
            <img src={picture}/>
        </div>
    );

}


export default Potato;