import React,{useState} from 'react';
import {render} from 'react-dom';
import {Link, Router} from '@reach/router';
import UseState from './UseState';
import Details from './Details';
import ThemeContext from './ThemeContext';
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

    const thereHook = useState('olive')

    return(
        <React.StrictMode>
            <ThemeContext.Provider value={thereHook}>
            <div>
                <header>
                    <Link to="/">Adopt Me!</Link>
                </header>
                {/* <Pet name="Rahul" rollno="615"/>
                <Pet name="Saif" rollno="654"/>
                <Pet name="Aman" rollno="618"/> */}
                <Router>
                    <UseState path="/"/>
                    <Details path="/details/:id"/>
                </Router>
            </div>
            </ThemeContext.Provider>
        </React.StrictMode>
    )
};

render(
    // React.createElement(App),
    <App/>,
    document.getElementById("root")
);