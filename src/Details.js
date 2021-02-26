import React from 'react'
import pet from '@frontendmasters/pet';
import './index.css';
class Details extends React.Component{

    state = {loading:true};
    componentDidMount () { //This runs only once
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
        const {animal,breed,location,description,name} = this.state;

        this.state.loading
        return (
            <div className="details">
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <button>Adopt {name}</button>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

export default Details;