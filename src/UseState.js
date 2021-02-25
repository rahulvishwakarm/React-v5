import React,{useState,useEffect} from 'react';
import pet,{ANIMALS} from  '@frontendmasters/pet';
import useDropdown from './UseDropdown';

const UseState=()=> {

    // const location = "Mumbai,Mahrashtra";

    const [location,setLocation] = useState("Mumbai,Mahrashtra"); //Hooks start with use
    const [breeds,setBreeds] = useState([]);
    const [animal,AnimalDropdown] = useDropdown("Animal","dog",ANIMALS);
    const [breed,BreedDropdown,setBreed] = useDropdown("Breed","",breeds);

    useEffect(()=>{   //Use effect is use to show some thing to the user as soon as API runs , it runs after all the content in above or below it runs
        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then(({ breeds})=>{
            const breedStrings =breeds.map(({name}) => name);
            setBreeds(breedStrings);
        },console.error);
    },[animal]);

    return (
        <div className="searchparams">
            <h1>{location}</h1>
            <form>
                <label htmlFor="">Location
                    <input id="location" value={location} placeholder="Location" onChange={event=>setLocation(event.target.value)}/>
                </label>
                <AnimalDropdown/>
                <BreedDropdown/>
                <button> Submit </button>
            </form>
        </div>
    )
}

export default UseState;
