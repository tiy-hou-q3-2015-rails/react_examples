var Posts = React.createClass({

  getInitialState(){
    return {
      posts: this.props.initialPosts
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
          return <div className="post">
            <h1>{post.title}</h1>
            {post.body.substring(0,240).split("\n").map(function(paragraph){
              return <p>{paragraph}</p>
            })}
          </div>
        })
      }
    </div>;
  }
});
