import React from 'react';
import './App.css';
import Query from './components/Query';
import Location from './components/Location';
import Results from './components/Results';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      brewery: null
    };
  };

  inputChange = (entry) => {
    this.setState({
      area: entry
    });
  };

  brewChange = (json) => {
    this.setState({
            isLoading: false,
            brewery: json
    });
    console.log(this.state.brewery);
  };

  render () {
    return (
      <div>
        <div className="App-header">
          <Query></Query>
          <Location handleChange={this.inputChange} callBack={this.brewChange}></Location>
        </div>
        <Results breweryInfo={this.state.brewery}></Results>
      </div>
    )
  };

};

export default App;
