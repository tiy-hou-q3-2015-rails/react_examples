//= require marked

var Post = React.createClass({

  bodyText(){

    var theText = this.props.post.body;

    if (this.props.excerpt){
      theText = theText.substring(0,240);
    }

    // return theText.split("\n").map(function(paragraph){
    //   return <p>{paragraph}</p>
    // })

    theText = marked(theText, {sanitize: true});

    return {__html: theText};
  },

  render() {
    return <div className="post">
      <h1><a href={"/posts/" + this.props.post.id} >{this.props.post.title}</a></h1>
      <div dangerouslySetInnerHTML={this.bodyText()}></div>
    </div>
  }
});
