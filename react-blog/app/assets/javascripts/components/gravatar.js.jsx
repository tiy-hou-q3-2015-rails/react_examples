//= require md5
var Gravatar = React.createClass({

  buildUrl: function() {
    var url = 'https://secure.gravatar.com/avatar/';
    return url + md5(this.props.email);
  },
  render: function() {
    var url = this.buildUrl();
    return (
      <img src={url} />
    );
  }
});
