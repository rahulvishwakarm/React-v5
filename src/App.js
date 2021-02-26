import React from 'react';
import {render} from 'react-dom';
import {Router} from '@reach/router';
import UseState from './UseState';
import Details from './Details';
// import Pet from './Pet';

const App = () =>{
    
    // return React.createElement(
    //         "div",
    //         {id:"appcomponent"},
    //         [
    //             React.createElement(Pet,{name:"Rahul",rollno:"615"}),
    //             React.createElement(Pet,{name:"Saif",rollno:"654"}),
    //             React.createElement(Pet,{name:"Aman",rollno:"618"})
    //         ]
    //     );

    return(
        <React.StrictMode>
            <div>
                {/* <h1>Adopt Me!</h1>
                <Pet name="Rahul" rollno="615"/>
                <Pet name="Saif" rollno="654"/>
                <Pet name="Aman" rollno="618"/> */}
                <Router>
                    <UseState path="/"/>
                    <Details path="/details/:id"/>
                </Router>
            </div>
        </React.StrictMode>
    )
};

render(
    // React.createElement(App),
    <App/>,
    document.getElementById("root")
);