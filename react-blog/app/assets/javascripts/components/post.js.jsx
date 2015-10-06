//= require marked
var Post = React.createClass({

  getInitialState: function(){
    return {
      post: this.props.post
    }

  },

  rawPostBody: function(){
    var rawMarkup = marked(this.state.post.body, {sanitize: true});
    return { __html: rawMarkup };
  },

  postUrl: function(){
     return "/posts/" + this.state.post.id;
  },

  render() {
    return <div className="post">
            <h1><a href={this.postUrl()}>{this.state.post.title}</a></h1>
            <span dangerouslySetInnerHTML={this.rawPostBody()} />
          </div>
  }
});
