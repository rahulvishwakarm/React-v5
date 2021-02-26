import React, { Component } from 'react'

class Carosuel extends Component {
    state = {
        photos:[],
        active:0
    };
    static getDerivedStateFromProps({ media }){
            let photos=['http://placeorgi.com/600/600'];
            if(media.length){
                photos = media.map(({large}) => large);
            }
            return {photos};
    }

    handleIndexClick = event => {
        this.setState({
            active: +event.target.dataset.index  // + sign is converting string to integer
        })
    }
    render() {
        const {photos,active} = this.state;
        return (
            <div className="carosuel">
                <img src={photos[active]} alt="animal" />
                <div className="carosuel-smaller">
                    {this.props.media.map((photo,index) =>(
                        <img
                            key={photo.large}
                            onClick={this.handleIndexClick}
                            data-index={index}
                            src={photo.large}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carosuel;
