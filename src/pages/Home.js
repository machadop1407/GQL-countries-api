import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const QUERY_LIST_OF_COUNTRIES = gql`
  {
    countries {
      name
      capital
      emoji
      code
    }
  }
`;

function Home() {
  const { data, loading, error } = useQuery(QUERY_LIST_OF_COUNTRIES);
  return (
    <div className="home">
      <div className="title">
        <h1>List Of Countries</h1>
        <Link to="/search"> Search for Country</Link>
      </div>
      <div className="listOfCountries">
        {loading && <h3> Data is loading...</h3>}
        {error && <h3> {error.message} </h3>}
        {data &&
          data.countries.map((country, key) => {
            return (
              <div key={key} className="country">
                <h2>
                  {country.name}
                  <label>{country.emoji}</label>
                </h2>
                <h4>
                  {country.capital} | {country.code}
                </h4>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
