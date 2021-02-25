import React,{useState} from 'react'

const SearchParams_Hooks=()=> {

    // const location = "Mumbai,Mahrashtra";

    const [location,setLocation] = useState("Mumbai,Mahrashtra"); //Hooks start with use

    return (
        <div className="searchparams">
            <h1>{location}</h1>
            <form>
                <label htmlFor="">Location
                    <input id="location" value={location} placeholder="Location" onChange={event=>setLocation(event.target.value)}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams_Hooks;
