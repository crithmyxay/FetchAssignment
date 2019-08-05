import React from 'react';
import './App.css';
import Query from './components/Query';
import Zipcode from './components/Zipcode';
// import Brewery from "./utils/Brewery";
import Results from './components/Results';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      brewery: null
    };
  }

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
    console.log(`please post the results!`);
  }

  render () {
    // const { isLoading, id, name, brewery_type, street, city, state, postal_code, country, longtitude, latitude, phone, website_url, updated_at, tag_list} = this.state
    
    return (
      <div className="App">
        <div className="App-header">
          <Query></Query>
          <Zipcode handleChange={this.inputChange} callBack={this.brewChange}></Zipcode>
          <Results breweryInfo={this.state.brewery}></Results>
        </div>
      </div>
    )
  }

}

export default App;
