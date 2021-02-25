import React from 'react';

export default function Pet({ name, rollno }){
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, rollno)
    ]);
};
