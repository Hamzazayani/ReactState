import React, { Component } from 'react';
import './App.css';
import FullName from './FullName';
import Bio from './Bio';
import Image from './Image';
import Profession from './Profession';

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Hamza zayani",
        bio: "A passionate developer",
        imgSrc: "https://www.madinjapan.fr/35800-home_default/the-flash-figurine-batman-modern-suit-movie-masterpiece-hot-toys.jpg",
        profession: "Software Engineer",
      },
      shows: true,
      timeSinceMount: 0
    };

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, timeSinceMount } = this.state;

    return (
      <div className="App">
        <button className="Button" onClick={this.toggleShow}>
          Hamza Profile
        </button>
        {shows && (
          <div className="Profile">
            <Image className="ProfileImage" imgSrc={person.imgSrc} alt="Profile" />
            <FullName className="FullName" fullName={person.fullName} />
            <Bio className="Bio" bio={person.bio} />
            <Profession className="Profession" profession={person.profession} />
          </div>
        )}
        <p className="TimeSinceMount">Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;


