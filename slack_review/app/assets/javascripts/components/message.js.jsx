var Message = React.createClass({

  render: function() {
    return <div className="message">
                {this.props.message.body}
                <br></br>
                <cite>Posted by {this.props.message.user.username}</cite>
              </div>

  }
});
