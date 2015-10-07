var Links = React.createClass({
  getInitialState(){
    return {
      links: this.props.links
    }
  },

  componentWillReceiveProps(newProps){
    this.setState({links: newProps.links});
  },

  render() {

    var component = this;
    return <div className="links">

      {this.state.links.sort(function(first, second){ return second.vote_total - first.vote_total; }).map(function(link){
        return <Link link={link}></Link>
      })}

    </div>
  }
});
