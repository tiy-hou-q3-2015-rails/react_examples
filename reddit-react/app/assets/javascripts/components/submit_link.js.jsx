var SubmitLink = React.createClass({

  handleSubmit(){
    var component = this;
    var data = {
      link: {
        title: this.refs.title.getDOMNode().value,
        url: this.refs.url.getDOMNode().value
      }
    }

    $.post("/api/links", data)
    .success(function(link){
      component.refs.title.getDOMNode().value = "";
      component.refs.url.getDOMNode().value = "";
      // Trigger action on parent component and send in link
    })
    .error(function(response){
      var errors = [];
      if (response.responseJSON.title.length > 0){
        errors.push("Title " + response.responseJSON.title.join(", "));
      }
      if (response.responseJSON.url.length > 0){
        errors.push("URL " + response.responseJSON.url.join(", "));
      }
      alert(errors.join("\n"));
    })
  },

  render: function() {
    return <div className="well">
          <h2>Submit Link</h2>
          <div className="form-group">
            <input placeholder="Title" type="text" className="form-control" ref="title"></input>
          </div>
          <div className="form-group">
            <input placeholder="Url" type="text" className="form-control" ref="url"></input>
          </div>
          <div className="form-group">
            <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
          </div>

        </div>
  }
});
