var Markdown = React.createClass({
  textHtml(){
    // Uses the marked js library to convert markdown to HTML, AND sanitize it
    var rawMarkup = marked(this.props.text, {sanitize: true});
    // return a js object with __html as the key. This is a react thing
    return { __html: rawMarkup };
  },


  render(){
    return <span dangerouslySetInnerHTML={this.textHtml()} />
  }
})
