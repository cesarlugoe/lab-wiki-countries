import React, { Component } from 'react'
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default class CountryDetail extends Component {

  state = {
    countryList: countries,
  }

  country = () => {
    const { id } = this.props.match.params;
    return this.state.countryList.find((item) => {
      return item.cca3 === id;
    })
  }

  borderFinder = () => {
    const country = this.country();

    const bordering = country.borders.map((neightboor,) => {
      return this.state.countryList.filter((item) => {
        return item.cca3 === neightboor ;
      })
    })
    
    return bordering.map((country) =>{
          return (<li key={country[0].cca3}><Link to={'/' + country[0].cca3}>{country[0].name.common}</Link></li>)
        })
    
  }

  render() {
    const country = this.country();
    
    return (
        <div className="col-7">
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {this.borderFinder()}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
       </div>
    )
  }
}
