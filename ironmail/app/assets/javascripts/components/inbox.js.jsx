var Inbox = React.createClass({

  getInitialState(){
    return {
      messages: []
    }
  },

  componentDidMount(){
    var component = this;
    fetch("/api/inbox").then(function(response){
      response.json().then(function(data){
        component.setState({messages: data.messages});
      })
    })
  },

  render() {
    var component = this;
    return <div className="inbox">

    <table className="table table-bordered table-striped">
      <thead>
      <tr>
        <th>New?</th>
        <th>From</th>
        <th>Subject</th>
        <th>Message</th>
      </tr>
      </thead>
      <tbody>

      {this.state.messages.map(function(message){
        return <MessageRow message={message}></MessageRow>
      })}

      </tbody>


    </table>

    </div>;
  }
});
