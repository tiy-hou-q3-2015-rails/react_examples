var Giphy = React.createClass({

  getInitialState(){
    return {
      giphs: []
    }
  },

  searchGiphyFor(term){
    console.log("searchGiphyFor", term);
    var component = this;
    var theurl = "http://api.giphy.com/v1/gifs/search?q=" + term + "&api_key=dc6zaTOxFJmzC";
    fetch(theurl).then(function(response) {
      response.json().then(function(json){
        component.setState({giphs: json.data});
      });
    });
  },

  // This runs when the parent gives Giphy new Props
  componentWillReceiveProps: function(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
    this.searchGiphyFor(nextProps.searchTerm);
  },

  // This runs when the component is added to the page
  //   (only once)
  componentDidMount(){
    console.log("Giphy componentDidMount");
    this.searchGiphyFor(this.props.searchTerm);
  },

  render() {
    console.log("Giphy is rendering", this.state.giphs.length);
    return <div>
      <h1>All the giphs for {this.props.searchTerm}</h1>
      {
        this.state.giphs.map(function(giph){
          return <img src={giph.images.fixed_height.url}/>
        })
      }
    </div>;
  }
});
