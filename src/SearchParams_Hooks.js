import React from 'react'

const SearchParams_Hooks=()=> {

    const location = "Mumbai,Mahrashtra";
    return (
        <div className="searchparams">
            <form>
                <label htmlFor="">Location
                    <input id="location" value={location} placeholder="Location"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams_Hooks;
