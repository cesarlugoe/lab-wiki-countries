import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import countries from './countries.json';
import CountryDetail from './pages/CountryDetail';

class App extends Component {

  state = {
    countryList: countries,
  }

  render() {
    return (
      <div className="App">
        <Route path={'/:id'} component={CountryDetail} />
         <div className= "container"> 
            <div className="row">
              <div className="col-5">
                <div className="list-group">
                  {this.state.countryList.map((country, index) => {
                    return <Link to={'/' + country.cca3} key={index}><div><p>{country.flag}</p>{country.name.common}</div></Link>
                  })}
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
