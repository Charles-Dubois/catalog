import React from "react";
import data from "../Info";
import { Link } from "react-router-dom";

class Movie extends React.Component {
  constructor() {
    super();
    this.movieActor = this.movieActor.bind(this);
  }

  movieActor() {
    return data[this.props.match.params.id].stars.map((res) => {
      return <li>{res}</li>;
    });
  }

  render() {
    return (
      <>
        <Link to="/">Homepage</Link>
        <p> id: {this.props.match.params.id}</p>

        <h2>{data.title}</h2>
        <p>Réalisateur : {data[this.props.match.params.id].director}</p>
        <p>Acteurs : </p>
        <ul>{this.movieActor()}</ul>

        <img
          src={data[this.props.match.params.id].image}
          alt="affiche du film"
        />
        <p>Synopsis : {data[this.props.match.params.id].description}</p>
      </>
    );
  }
}

export default Movie;
