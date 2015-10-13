var MessageForm = React.createClass({

  handleButtonClick(){
    var component = this;
    var theText = this.refs.body.getDOMNode().value;

    var messageJSON = {
      message: {
        body: theText
      }
    }

    $.post("/api/rooms/" + this.props.room.id + "/messages.json", messageJSON).then(function(json){
      component.refs.body.getDOMNode().value = "";

      // To get the UX that slack has:
      // Immediately add the message to the page
      // Scroll to it
      // But that's hard. So let's refresh the browser instead. 
      window.location = window.location;
    });
  },

  render: function() {
    return <div className="message_form">
      <input type="text" ref="body"></input>
      <button onClick={this.handleButtonClick}>Submit</button>
    </div>;
  }
});
