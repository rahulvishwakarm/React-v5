import React from 'react'
import pet from '@frontendmasters/pet';
import './index.css';
import Carosuel from './Carosuel';
import ErrorBoundaries from './ErrorBoundaries';
import ThemeContext from './ThemeContext';

class Details extends React.Component{

    state = {loading:true};
    componentDidMount () { //This runs only once
        // throw new Error("Rahul_Test_Error");   //This linw will create error, then page will be redired to home
        pet.animal(this.props.id)
        .then(({animal}) => {
            this.setState({
                name:animal.name,
                animal:animal.type,
                location:`${animal.contact.address.city},${animal.contact.address.state}`,
                description:animal.description,
                media:animal.photos,
                breed:animal.breeds.primary,
                loading:false
            },console.error)
        })
    }
    render () {
        if(this.state.loading){
            return <h1>Loading...<div class="loader"></div></h1>
        }
        const {animal,breed,location,description,name,media} = this.state;
        this.state.loading
        return (
            <div className="details">
                <Carosuel media={media} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <ThemeContext.Consumer>
                        {([theme]) => (
                            <button style={{ backgroundColor: theme}}>Adopt {name}</button>
                        )}
                    </ThemeContext.Consumer> 
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

export default function DetailsWithErrorBoundary(props){
    return (
        <ErrorBoundaries>
            <Details {...props}/> {/** Spread props throughout Details*/}
            {/** This Can also be written as
             * 
             * <Details is={props.id}/>
            */}
        </ErrorBoundaries> 
    )
}