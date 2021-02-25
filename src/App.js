import React from 'react'
import {render} from 'react-dom'
import Pet from './Pet';

const App = () =>{
    return React.createElement(
            "div",
            {id:"appcomponent"},
            [
                React.createElement(Pet,{name:"Rahul",rollno:"615"}),
                React.createElement(Pet,{name:"Saif",rollno:"654"}),
                React.createElement(Pet,{name:"Aman",rollno:"615"})
            ]
        );
};

render(
    React.createElement(App),
    document.getElementById("root")
);