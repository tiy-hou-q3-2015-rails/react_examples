var Post = React.createClass({

  getInitialState(){
    return {
      post: {
        body: "",
        comments: []
      }
    }
  },

  componentDidMount(){
    var component = this;
    $.getJSON("/api/posts/" + this.props.post.id).then(function(json){
      component.setState({post: json.post});
    })
  },

  render() {
    return <div className="post">
      <h2>{this.state.post.title}</h2>
      <Time timestamp={this.state.post.posted_at}></Time>
      <Markdown text={this.state.post.body}></Markdown>

      <h4>Comments</h4>
      {this.state.post.comments.map(function(comment){
        return <blockquote><Markdown text={comment.body}></Markdown></blockquote>
      })}
    </div>;
  }
});
