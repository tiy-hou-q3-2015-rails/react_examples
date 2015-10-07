var Link = React.createClass({

  getInitialState(){
    return {
      link: this.props.link
    }
  },

  handleUpvote(){
    var component = this;
    $.post("/api/links/" + this.state.link.id + "/upvote")
    .success(function(json){
      component.setState({link: json});
    })
  },

  handleDownvote(){
    var component = this;
    $.post("/api/links/" + this.state.link.id + "/downvote")
    .success(function(json){
      component.setState({link: json});
    })
  },

  render() {
    var component = this;
    return <div className="link">
      <div className="row">
        <div className="col-xs-2">
          <span onClick={component.handleUpvote}>👍</span><br/>
          {component.state.link.vote_total}<br/>
          <span onClick={component.handleDownvote}>👎</span><br/>
        </div>
        <div className="col-xs-10">
          {component.state.link.title}<br/>
          {component.state.link.url}
        </div>
      </div>
    </div>
  }
});
