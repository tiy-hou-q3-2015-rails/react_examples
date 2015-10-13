var Message = React.createClass({

  render: function() {
    return <div className="message">
    <div className="box">
      <strong>From</strong>
      {this.props.message.from_email}
    </div>

    <div className="box">
      <strong>Date Received</strong>
      {this.props.message.created_at_formatted} ago
    </div>

    <div className="box">
      <strong>Subject</strong>
      {this.props.message.subject}
    </div>

    <div className="big box">
      {this.props.message.body}
    </div>

    </div>;
  }
});
