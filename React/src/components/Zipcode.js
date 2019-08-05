import React from 'react';

class Zipcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.grabData = this.grabData.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('State was submitted: ' + this.state.value);
    event.preventDefault();
  }

  grabData(list) {
    this.props.callBack(list);
    console.log('it\'s making it to grabData')
  }

  callApi(){
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${this.state.value}`)
    .then((result) => {
      // Get the result
      // If we want text, call result.text()
      return result.json();
    }).then((jsonResult) => {
      // Do something with the result
      this.grabData(jsonResult);
    })
  }

  render() {
    return (
      <form className="" onSubmit={this.handleSubmit}>
        <label>
          State:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input onClick={() => this.callApi()} className="Zip-button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Zipcode;