//= require 'newforms'
//= require 'newforms-bootstrap'

var PostForm = forms.Form.extend({
  title: forms.CharField({maxLength: 20, required: true}),
  body: forms.CharField({maxLength: 2000}),
  published: forms.BooleanField({required: true})
  // ...
})

var Posting = React.createClass({

  onPost(payload){

    let data = {};
    // data[this.props.form.csrf_param] = this.props.form.csrf_token;
    data["post"] = payload;

    $.post(this.props.form.action + ".json", data)
    .done(function(json) {
      alert("done");
      console.log(json)
    })

  },

  _onSubmit(e) {
    e.preventDefault();
    var form = this.refs.postForm.getForm()
    if (form.validate()) {
      this.onPost(form.cleanedData);
    }

  },

  render: function() {

    return <form onSubmit={this._onSubmit}>
      <forms.RenderForm form={PostForm} ref="postForm">
        <BootstrapForm/>
      </forms.RenderForm>
      <button>Post Article</button>
    </form>

  }
});
