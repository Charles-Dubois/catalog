import React from "react";
import data from "../Info";
import { Link } from "react-router-dom";
class Homepage extends React.Component {
  constructor() {
    super();
    this.homepageData = this.homepageData.bind(this);
  }

  homepageData() {
    return data.map((res, i) => {
      return <Link to={`Movie/${i}`}>{res.title}</Link>;
    });
  }
  render() {
    return (
      <>
        <h2>Homepage</h2>
        <div className="liste">{this.homepageData()}</div>
      </>
    );
  }
}

export default Homepage;
