import React, { Component } from 'react'

export default class Navbar extends Component {

  render() {
    return (
      <div>
        <Navbar
          countryFrance={() => this.countrys('France')}
          countryGermany={() => this.countrys('Germany')}
          countryItaly={() => this.countrys('Italy')}
          countryUzbekistan={() => this.countrys('Uzbekistan')}
          countryUS={() => this.countrys('United+States')}
        />

      </div>
    )
  }
}
