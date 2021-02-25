import React,{useState} from 'react';
import {ANIMALS} from  '@frontendmasters/pet';
import useDropdown from './UseDropdown';

const UseState=()=> {

    // const location = "Mumbai,Mahrashtra";

    const [location,setLocation] = useState("Mumbai,Mahrashtra"); //Hooks start with use
    const [breeds,setBreeds] = useState([]);
    const [animal,AnimalDropdown] = useDropdown("Animal","dog",ANIMALS);
    const [breed,BreedDropdown] = useDropdown("Breed","",breeds);

    return (
        <div className="searchparams">
            <h1>{location}</h1>
            <form>
                <label htmlFor="">Location
                    <input id="location" value={location} placeholder="Location" onChange={event=>setLocation(event.target.value)}/>
                </label>
                <AnimalDropdown/>
                <BreedDropdown/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UseState;
