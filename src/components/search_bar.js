import React, { Component } from 'react';

class SearchBar extends Component {
    // Initiate State
    constructor(props) {
        super(props); //Calling parent method with super from Component
        this.state = { term: '' };
    }

    //Binder
    //Handler

    render() {
        return (
            <div>    
                <input 
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>    
        )   
    }

}

export default SearchBar;