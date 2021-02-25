const Pet = ({name,rollno}) =>{
    return React.createElement("div",{},[
        React.createElement("h1",{},name),
        React.createElement("h2",{},rollno)
    ]);
};

const App = () =>{
    return React.createElement("div",{id:"appcomponent"},
            [
                React.createElement(Pet,{name:"Rahul",rollno:"615"}),
                React.createElement(Pet,{name:"Saif",rollno:"654"}),
                React.createElement(Pet,{name:"Aman",rollno:"615"})
            ]
        );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);