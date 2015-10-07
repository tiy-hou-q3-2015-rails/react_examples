var CommentBox = React.createClass({

  getInitialState(){
    return {
      comments: this.props.comments,
      errors: {}
    }
  },

  handleButtonClick(event){
    event.preventDefault();
    this.refs.submitButton.getDOMNode().disabled = true;
    var component = this;
    var theUrl = "/api/posts/" + this.props.post.id + "/comments";

    var data = {
      comment: {
        author: this.refs.author.getDOMNode().value,
        body: this.refs.body.getDOMNode().value,
        email: this.refs.email.getDOMNode().value
      }
    };

    $.post(theUrl, data)
    .always(function(){
      component.refs.submitButton.getDOMNode().disabled = false;
    })
    .fail(function(data){
      console.log("Ok we have posted", data.responseJSON);

      var errors = {};

      if(data.responseJSON.author){
        errors.author = data.responseJSON.author.join(", ");
      }
      if(data.responseJSON.body){
        errors.body = data.responseJSON.body.join(", ");
      }
      if(data.responseJSON.email){
        errors.email = data.responseJSON.email.join(", ");
      }

      component.setState({errors: errors});

    })
    .done(function(json){

      console.log("Ok we have posted", json);

      var newComments = component.state.comments.concat(json.comment);
      component.setState({comments: newComments});
      component.refs.author.getDOMNode().value = "";
      component.refs.body.getDOMNode().value = "";
      component.refs.email.getDOMNode().value = "";

    })

  },

  errorMessage(ref){
    if (this.state.errors[ref]){
      return <p className="help-block">{this.state.errors[ref]}</p>
    }
  },

  classNameFor(ref){
    var classNames = [];
    classNames.push("form-group");
    if (this.state.errors[ref]){
      classNames.push("has-error");
    }

    return classNames.join(" ");
  },

  render() {
    return <div>
      <h2>Comments</h2>

      <form onSubmit={this.handleButtonClick}>

      <div className={this.classNameFor("author")}>
        <input type="text" ref="author" className="form-control" placeholder="Your Name"></input>
        {this.errorMessage("author")}

      </div>

      <div className={this.classNameFor("email")}>
        <input type="text" ref="email" className="form-control" placeholder="Your Email"></input>
        {this.errorMessage("email")}
      </div>

      <div className={this.classNameFor("body")}>
        <textarea ref="body" className="form-control" placeholder="Your terrible comment"></textarea>
        {this.errorMessage("body")}
      </div>
      <div className="form-group">
        <button ref="submitButton"  className="btn btn-primary btn-lg btn-block">Submit Terrible Comment</button>
      </div>

      </form>

      {this.state.comments.sort(function(first, second){return second.id-first.id}).map(function(comment){
        return <ol>
        <blockquote>
          <Gravatar email={comment.email}></Gravatar>
          {comment.body}

          <footer><cite>{comment.author}</cite></footer>
        </blockquote>
        </ol>
      })}

    </div>;
  }
});
