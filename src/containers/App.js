import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state ={
            robots: [],
            serachfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({serachfield: event.target.value})
    }

    render() {
        const { robots, serachfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(serachfield.toLowerCase())
        })
        if (!robots.length) {
            return <h1 className='f1 tc'>Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className='f1' >RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        } 
    }

}

export default App;
