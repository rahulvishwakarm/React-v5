import React from 'react';

export default function Pet({ name, breed }){

    // return React.createElement("div", {}, [
    //     React.createElement("h1", {}, name),
    //     React.createElement("h2", {}, rollno)
    // ]);

    return(
        <div>
            <h1>{name}</h1>
            <h2>{breed}</h2>
        </div>
    )
};
