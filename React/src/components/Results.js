import React, { Component } from "react";

class Results extends Component {

  // componentDidUpdate(prevProps) {
  //   if (this.props.breweryInfo !== prevProps.breweryInfo) {
  //       // this.fetchData(this.props.breweryInfo);
  //       // console.log(this.props.breweryInfo)
  //   }
  // };
    
    render () {
      if (!this.props.breweryInfo) {
        console.log(`${this.props.breweryInfo}`)
        return <div></div>
      }
      else {
        return this.props.breweryInfo.map((pub, i) => {
          return <div key={i}>{pub.name}</div>
        })
      }
  }

};
export default Results;