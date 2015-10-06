var Clock = React.createClass({

  getInitialState(){
    return {
      currentTime: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
  },

  updateTime(){
    this.setState({currentTime: moment().format('MMMM Do YYYY, h:mm:ss a')
});
  },

  componentDidMount(){
    this.clockInterval = setInterval(this.updateTime, 1000);
  },

  componentWillUnmount(){
    clearInterval(this.clockInterval);
  },

  render() {
    return <div className="clock">
      {this.state.currentTime}
    </div>
  }
});
