import Zipcode from "../components/Zipcode"; 

class Location extends Zipcode.Component {
  constructor(props) {
    super(props);
    this.state = {usState: this.props.value}
  }
  
}