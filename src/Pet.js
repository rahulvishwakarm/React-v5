import React from 'react';
import './index.css';

export default function Pet({ name, animal,breed,media,location,id }){

    // return React.createElement("div", {}, [
    //     React.createElement("h1", {}, name),
    //     React.createElement("h2", {}, rollno)
    // ]);
    let hero = 'https://placeorgi.com/300/300';
    if(media.length){
        hero=media[0].small;
    }
    
    return (
        <div className="aligning">
        <a href={`/details/${id}`} className="pet">
            <div className="image-container">
                <img src={hero} alt={name}/>
            </div>
            <div className="info">
                <h1>name</h1>
                <h2>{`${animal} - ${breed} - ${location}`}</h2>
            </div>
        </a>
        </div>
    )
    
    
};
