var PostsList = React.createClass({

  getInitialState(){
    return {
      posts: []
    }
  },

  componentDidMount(){
    var component = this;
    $.getJSON("/api/posts").then(function(json){
      component.setState({posts: json.posts});
    })
  },

  

  render: function() {
    var component = this;
    return <div>
      <h1>MarkBlog</h1>
      <div className="row">
      {this.state.posts.map(function(post){
        return <div className="col s12 m6">
        <Excerpt post={post}></Excerpt>
        </div>
      })}
      </div>

    </div>;
  }
});
