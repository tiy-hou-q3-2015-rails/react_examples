var Excerpt = React.createClass({

  excerptText(){
    var fullText = this.props.post.body;
    if (fullText.length > 300) {
      return fullText.substring(0, 300);
    } else {
      return fullText;
    }
  },

  render: function() {
    var post = this.props.post;
    return <div className="card blue-grey darken-1">
      <div className="card-content white-text">
      <span className="card-title">{post.title}</span>
      <Time timestamp={post.posted_at}></Time>
      <Markdown text={this.excerptText()}></Markdown>
      </div>
      <div className="card-action">
             <a href={"/posts/" + post.id}>Read Article</a>
           </div>
      </div>;
  }
});
