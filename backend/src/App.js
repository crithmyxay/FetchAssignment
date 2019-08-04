import React from 'react';
import './App.css';
import Query from './components/Query';
import Zipcode from './components/Zipcode';
import Brewery from "./utils/Brewery";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      id: null,
      name: null,
      brewery_type: null,
      street: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      longitude: null,
      latitude: null,
      phone: null,
      website_url: null,
      updated_at: null,
      tag_list: []
    };
  }

  render () {
    const { isLoading, id, name, brewery_type, street, city, state, postal_code, country, longtitude, latitude, phone, website_url, updated_at, tag_list} = this.state

    return (
      <div className="App">
        <div className="App-header">
          <Query></Query>
          <Zipcode></Zipcode>
        </div>
      </div>
    )
  }

  async componentDidMount() {
    // Load async data.
    let breweryData = await Brewery.get('/', {
      params: {
        results: 1,
        inc: 'isLoading,id,name,brewery_type,street,city,state,postal_code,country,longtitude,latitude,phone,website_url,updated_at,tag_list'
       }
      });
    
      try {
        // Load async data from an inexistent endpoint.
        let breweryData = await Brewery.get(`/?by_state=${}`);
      } catch (e) {
        console.log(`😱 Axios request failed: ${e}`);
      }

    const { id, name, brewery_type, street, city, state, postal_code, country, longtitude, latitude, phone, website_url, updated_at, tag_list } = breweryData
    
    this.setState({
      ...this.state, ...{
        isLoading: false,
        name,
        brewery_type, 
        street, 
        city, 
        state, 
        postal_code, 
        country, 
        longtitude, 
        latitude, 
        phone, 
        website_url, 
        updated_at, 
        tag_list
      }
    });

    console.log(breweryData);
  }

}

export default App;
