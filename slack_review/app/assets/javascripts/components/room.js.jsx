var Room = React.createClass({

  getInitialState(){
    return {
      room: {
        name: "...loading...",
        id: this.props.room.id,
        messages: []
      }
    }
  },

  fetchMessages(){
    var component = this;

    $.getJSON("/api/rooms/" + this.state.room.id + ".json")
      .done(function(json){
        component.setState({room: json.room});

        // Scroll to bottom of "messages"
      })


    // fetch("/api/rooms/" + this.state.room.id + ".json", {credentials: 'include'}).then(function(response){
    //   response.json().then(function(json){
    //
    //   })
    // })
  },

  componentDidMount(){
    this.fetchMessages();
    // scroll to bottom of messages
    $('.messages').animate({scrollTop:(5400)}); // I made 5400 up
    this.messageInterval = setInterval(this.fetchMessages, 3000);
  },

  componentWillUnmount(){
    clearInterval(messageInterval);
  },


  render: function() {
    return <div>
      {this.state.room.name} ({this.state.room.messages.length})

      <div className="messages">
        {this.state.room.messages.map(function(message){
          return <Message message={message}></Message>
        })}
      </div>

      <MessageForm room={this.state.room}></MessageForm>

    </div>;
  }
});
