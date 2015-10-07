var Reddit = React.createClass({

  getInitialState(){
    return {
      links: this.props.links
    }
  },

  fetchLinks(){
    var component = this;
    fetch("/api/links").then(function(response){
      response.json().then(function(data){
        component.setState({links: data});
      })
    })
  },

  componentDidMount(){
    this.interval = setInterval(this.fetchLinks, 3000);
  },

  componentWillUnmount(){
    clearInterval(this.interval);
  },

  render() {
    return <div>

      <SubmitLink></SubmitLink>

      <Links links={this.state.links}></Links>

    </div>
  }
});
