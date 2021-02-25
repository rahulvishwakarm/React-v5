import React,{useState} from 'react';
import {ANIMALS} from  '@frontendmasters/pet';

const SearchParams_Hooks=()=> {

    // const location = "Mumbai,Mahrashtra";

    const [location,setLocation] = useState("Mumbai,Mahrashtra"); //Hooks start with use
    const [animal,setAnimal] = useState("dog");

    return (
        <div className="searchparams">
            <h1>{location}</h1>
            <form>
                <label htmlFor="">Location
                    <input id="location" value={location} placeholder="Location" onChange={event=>setLocation(event.target.value)}/>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal" value={animal} onChange={e=> setAnimal(e.target.value)}
                                                        onBlur={e=>setAnimal(e.target.value)} >
                            <option>All</option>
                            {ANIMALS.map(animal => {
                                return <option key={animal} value={animal}>{animal}</option>
                            })}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams_Hooks;
