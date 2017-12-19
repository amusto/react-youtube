// React naturally requires you to think in OOP
/* Project comprises of the following components:
1. Search bar
2. Current video display
3. Videos list
4. Individual videos
5. App as a whole
*/
/* 
Consider adding google auth for my version on Heroku
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
const API_KEY = 'AIzaSyBMBJwLBNb7DB9VME7LW7vnngfTa2sT60E';

// Create a new component. This component will be our root Component.
class App extends Component {
    constructor(props) {
        super(props); 
        this.state = { 
            videos: [],
            selectedVideo: null
         };

         this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });
        })
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/> 
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
                    videos={this.state.videos} />
            </div>
        )   
    }

}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
