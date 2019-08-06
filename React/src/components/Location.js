import React from 'react';
import { Dropdown } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          value: '',
          show: false,
          states: ["Alaska",
                  "Alabama",
                  "Arkansas",
                  "Arizona",
                  "California",
                  "Colorado",
                  "Connecticut",
                  "District of Columbia",
                  "Delaware",
                  "Florida",
                  "Georgia",
                  "Hawaii",
                  "Iowa",
                  "Idaho",
                  "Illinois",
                  "Indiana",
                  "Kansas",
                  "Kentucky",
                  "Louisiana",
                  "Massachusetts",
                  "Maryland",
                  "Maine",
                  "Michigan",
                  "Minnesota",
                  "Missouri",
                  "Mississippi",
                  "Montana",
                  "North Carolina",
                  "North Dakota",
                  "Nebraska",
                  "New Hampshire",
                  "New Jersey",
                  "New Mexico",
                  "Nevada",
                  "New York",
                  "Ohio",
                  "Oklahoma",
                  "Oregon",
                  "Pennsylvania",
                  "Rhode Island",
                  "South Carolina",
                  "South Dakota",
                  "Tennessee",
                  "Texas",
                  "Utah",
                  "Virginia",
                  "Virgin Islands",
                  "Vermont",
                  "Washington",
                  "Wisconsin",
                  "West Virginia",
                  "Wyoming"]
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.grabData = this.grabData.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('State was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleClick(click) {
    this.setState({
      value: click.currentTarget.value,
      show: false
    });
    click.preventDefault();
  }

  toggleDropdown(click) {
    this.setState({
      show: true
    })
  }

  grabData(list) {
    this.props.callBack(list);
  }

  callApi(){
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${this.state.value}&per_page=50`)
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
          <Dropdown show={this.state.show} >
            <Dropdown.Toggle onClick={this.toggleDropdown}>
              Choose a State
            </Dropdown.Toggle>
            <DropdownMenu style={{maxHeight:'40rem', overflow: 'auto'}}>
              {this.state.states.map((state,i)=>{
                return <DropdownItem key={i} as="button" onClick={this.handleClick} value={state}>{state}</DropdownItem>;
              })};
            </DropdownMenu>
          </Dropdown>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input onClick={() => this.callApi()} className="Zip-button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Location;