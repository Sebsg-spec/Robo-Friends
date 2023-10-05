import React, { Component } from "react";
import CardList from "./cardList";
import { robots } from "./robots";
import SearchBox from "./searchbox";


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onsearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filteredRobots);
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange = {this.onsearchChange} />
            <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;