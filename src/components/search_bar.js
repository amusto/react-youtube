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
            <div className="search-bar">    
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>    
        )   
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;