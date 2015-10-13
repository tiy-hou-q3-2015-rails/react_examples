var MessageRow = React.createClass({

  getInitialState(){
    return {
      clickEnabled: false,
      message: this.props.message
    }
  },

  handleViewMessage(){
    var component = this;
    // Post to the api and mark as read

    $.post(this.state.message.read_message_url)
    .done(function(json){
      component.setState({message: json.message });
    })

    //window.location = this.props.message.url;
    component.setState({clickEnabled: !component.state.clickEnabled});
  },


  render: function() {
    var component = this;

    var message = <div></div>;
    if (component.state.clickEnabled){
      message = <Message message={this.state.message}></Message>;
    }


    return <tr onClick={component.handleViewMessage}>
      <td>{this.state.message.read ? "" : "NEW"}</td>
      <td>{this.state.message.from_email}</td>
      <td>{this.state.message.subject}</td>
      <td>{this.state.message.body}

      {message}

      </td>


    </tr>
  }
});
