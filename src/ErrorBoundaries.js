import { Link } from '@reach/router';
import React, { Component } from 'react'

class ErrorBoundaries extends Component {

    state = {hasError: false}
    static getDerivedStateFromError () {
        return { hasError: true};
    }
    componentDidCatch(error,info){
        console.error("ErrorBoundary acugh an error",error,info)
    }
    render() {
        if(this.state.hasError){
            return (
                <h1>
                    There was some error with the listing. <Link to="/">Click here</Link>to go to the home page or wait 5 seconds
                </h1>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundaries;
