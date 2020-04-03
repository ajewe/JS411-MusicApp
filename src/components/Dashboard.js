import React from 'react';
import OnlineCard from './Online-card';
import VolumeCard from './Volume-card';
import SoundQualityCard from './SoundQuality-card';

class Dashboard extends React.Component {
  state = {
    notifications: [],
    online: true,
    volume: 20,
    quality: 'normal',
  }

  handleSwitch = () => {
    let newOnlineState = !this.state.online
    this.setState({ online: newOnlineState })
    if (!newOnlineState) {
      this.setState({ 
        notifications: [
          ...this.state.notifications, 
          "Your application is offline. You won't be able to share or stream music to other devices."
        ]
      })
    }
  }

  handleSlider = (event, value) => {
    this.setState({ volume: value})
    if(value > 80) {
      this.setState({ 
        notifications: [
          ...this.state.notifications, 
          "Listening to music at a high volume could cause long-term hearing loss."
        ]
      })
    }
  }

  handleSelect = (event) => {
    let newQuality = event.target.value
    this.setState({ quality: newQuality})
    if (newQuality === 'low') {
      this.setState({
        notifications: [
          ...this.state.notifications,
          "Music quality is degraded. Increase quality if your connection allows it."
        ]
      })
    }
  }

  render() {
    return(
      <div>
        <h1 style={{paddingLeft: "20px"}}>Welcome User!</h1>
        <div style={{display: "flex", justifyContent: "center"}}>
          <OnlineCard  
            handleSwitch={this.handleSwitch}
             checkedOnline={this.state.online}
          />
          <VolumeCard 
            handleSlider={this.handleSlider}
          />
          <SoundQualityCard 
            handleSelect={this.handleSelect}
          />
        </div>
        <h1 style={{paddingLeft: "20px"}}>
          System Notifications:
          {this.state.notifications.map((notification, index) => {
            return <p key={index} style={{fontSize: "14px", marginLeft: "10px"}}>{notification}</p>
          })}
        </h1>
      </div>
    )
  }
}

export default Dashboard;