import React,{useState,useEffect,useContext} from 'react';
import pet,{ANIMALS} from  '@frontendmasters/pet';
import useDropdown from './UseDropdown';
import Results from './Results';
import ThemeContext from './ThemeContext';

const UseState=()=> {

    // const location = "Mumbai,Mahrashtra";

    const [location,setLocation] = useState("Mumbai,Mahrashtra"); //Hooks start with use
    const [breeds,setBreeds] = useState([]);
    const [animal,AnimalDropdown] = useDropdown("Animal","dog",ANIMALS);
    const [breed,BreedDropdown,setBreed] = useDropdown("Breed","",breeds);
    const [pets,setPets] = useState([]);
    const [theme,setTheme] = useContext(ThemeContext);


    async function requestPets(){  //Asyns is the function that guarantee to return Promise
        const {animals} = await pet.animals({
            location,
            breed,
            type:animal
        })

        setPets(animals || []);
    }

    useEffect(()=>{   //Use effect is use to show some thing to the user as soon as API runs , it runs after all the content in above or below it runs
        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then(({ breeds})=>{
            const breedStrings =breeds.map(({name}) => name);
            setBreeds(breedStrings);
        },console.error);
    },[animal,setBreed,setBreeds]);

    return (
        <div className="searchparams">
            <h1>{location}</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="">Location
                    <input id="location" value={location} placeholder="Location" onChange={event=>setLocation(event.target.value)}/>
                </label>
                <AnimalDropdown/>
                <BreedDropdown/>
                <label htmlFor="theme">
                    Theme
                    <select
                        value={theme}
                        onChange={e => setTheme(e.target.value)}
                        onBlur={e => setTheme(e.target.value)}
                    >
                        <option value="peru">Peru</option>
                        <option value="olive">Olive</option>
                        <option value="lightblue">Light Blue</option>
                        <option value="chartreuse">Chart Reuse</option>
                    </select>
                </label>
                <button style={{backgroundColor:theme}}> Submit </button>
            </form>
            <Results pets={pets}/>
        </div>
    )
}

export default UseState;
