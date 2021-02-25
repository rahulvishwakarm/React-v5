import React from 'react';

export default function Pet({ name, rollno }){

    // return React.createElement("div", {}, [
    //     React.createElement("h1", {}, name),
    //     React.createElement("h2", {}, rollno)
    // ]);

    return(
        <div>
            <h1>{name}</h1>
            <h2>{rollno}</h2>
        </div>
    )
};
