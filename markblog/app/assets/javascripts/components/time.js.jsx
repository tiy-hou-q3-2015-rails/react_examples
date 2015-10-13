var Time = React.createClass({
  render(){
    return <span>
    {moment(this.props.timestamp).fromNow()}
    </span>
  }
})
