import React, { Component } from "react";
import CardList from "../components/cardList";
import { robots } from "../robots";
import SearchBox from "../components/searchbox";
import Scroll from '../components/scroll.js'

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/') 
        .then(response => response.json())
        .then(users =>{ this.setState({robots: users})});
}

    onsearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const {robots, searchfield} = this.state; 
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange = {this.onsearchChange} />
            <Scroll>
            <CardList robots={filteredRobots} />
            </Scroll>
            </div>
        );
    }
}

export default App;