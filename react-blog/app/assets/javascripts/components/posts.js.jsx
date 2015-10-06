var Posts = React.createClass({

  getInitialState(){
    return {
      posts: this.props.posts
    }
  },


  fetchPosts(){
    var component = this;
    fetch("/api/posts").then(function(response){
      response.json().then(function(json){
        component.setState({posts: json.posts});
      });
    });
  },

  componentDidMount(){
    this.fetchPosts();
    this.fetchPostInterval = setInterval(this.fetchPosts, 3000);
  },

  componentWillUnmount(){
    // When component is destroyed, let's clean up our mess
    clearInterval(this.fetchPostInterval);
  },

  handleRefreshClick() {
    this.fetchPosts();
  },

  render() {
    return <div>

      <h1>Posts - {this.state.posts.length}</h1>

      <div className="text-right">
        <button onClick={this.handleRefreshClick} className="btn btn-primary">Refresh</button>
      </div>

      {
        this.state.posts.map(function(post){
          return <Post post={post}></Post>
        })
      }
    </div>;
  }
});
