import React from 'react'
import pet from '@frontendmasters/pet';
import {navigate} from '@reach/router';
import Modal from "./Modal";
import './index.css';
import Carosuel from './Carosuel';
import ErrorBoundaries from './ErrorBoundaries';
import ThemeContext from './ThemeContext';

class Details extends React.Component{

    state = {loading:true , showModal:false};
    componentDidMount () { //This runs only once
        // throw new Error("Rahul_Test_Error");   //This linw will create error, then page will be redired to home
        pet.animal(this.props.id)
        .then(({animal}) => {
            this.setState({
                url:animal.url,
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

    toggleModal = () => this.setState({ showModal: !this.state.showModal})
    adopt = () => navigate(this.state.url)
    render () {
        if(this.state.loading){
            return <h1>Loading...<div class="loader"></div></h1>
        }
        const {animal,breed,location,description,name,media,showModal} = this.state;
        this.state.loading
        return (
            <div className="details">
                <Carosuel media={media} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <ThemeContext.Consumer>
                        {([theme]) => (
                            <button onClick={this.toggleModal} style={{ backgroundColor: theme}}>Adopt {name}</button>
                        )}
                    </ThemeContext.Consumer>
                    <p>{description}</p>
                    {
                        showModal ? (
                            <Modal>
                                <div>
                                    <h1>Would you like to Adopt {name}</h1>
                                    <div className="buttons">
                                        <button onClick={this.adopt} > Yes </button>
                                        <button onClick={this.toggleModal} > No, I am a monster </button>
                                    </div>
                                </div>
                            </Modal>
                        ) : null
                    }
                </div>
            </div>
        )
    }
}

export default function DetailsWithErrorBoundary(props){
    return (
        <ErrorBoundaries>
            <Details {...props}/>            
            {/** Spread props throughout Details*/}
            {/** This Can also be written as
             * 
             * <Details is={props.id}/>
            */}
        </ErrorBoundaries>
    )
}